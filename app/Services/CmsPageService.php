<?php

declare(strict_types=1);

namespace App\Services;

use App\Models\CmsPage;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CmsPageService
{
    /**
     * Get all CMS pages with optional filters.
     *
     * @param  array<string, mixed>  $filters
     */
    public function getAllPages(array $filters = []): \Illuminate\Support\Collection
    {
        $query = CmsPage::query();

        // Status filter
        if (isset($filters['is_active'])) {
            $query->where('is_active', (bool) $filters['is_active']);
        }

        // Sort
        $sortBy = $filters['sort_by'] ?? 'created_at';
        $sortOrder = $filters['sort_order'] ?? 'desc';
        $query->orderBy($sortBy, $sortOrder);

        return $query->get();
    }

    /**
     * Get CMS page statistics.
     *
     * @return array<string, int>
     */
    public function getPageStats(): array
    {
        return [
            'total' => CmsPage::count(),
            'active' => CmsPage::where('is_active', true)->count(),
            'inactive' => CmsPage::where('is_active', false)->count(),
        ];
    }

    /**
     * Create a new CMS page.
     *
     * @param  array<string, mixed>  $data
     */
    public function createPage(array $data): CmsPage
    {
        // Handle image upload
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            $data['image'] = $this->handleImageUpload($data['image']);
        }

        // Generate slug if not provided
        if (empty($data['slug'])) {
            $data['slug'] = Str::slug($data['title']);
        }

        // Ensure slug is unique
        $data['slug'] = $this->ensureUniqueSlug($data['slug']);

        return CmsPage::create($data);
    }

    /**
     * Update an existing CMS page.
     *
     * @param  array<string, mixed>  $data
     */
    public function updatePage(int $id, array $data): CmsPage
    {
        $page = CmsPage::findOrFail($id);

        // Handle image upload
        if (isset($data['image']) && $data['image'] instanceof UploadedFile) {
            // Delete old image if exists
            if ($page->image) {
                $this->deleteImage($page->image);
            }
            $data['image'] = $this->handleImageUpload($data['image']);
        } elseif (isset($data['remove_image']) && $data['remove_image']) {
            // Remove image if requested
            if ($page->image) {
                $this->deleteImage($page->image);
                $data['image'] = null;
            }
        }

        // Update slug if title changed
        if (isset($data['title']) && $data['title'] !== $page->title) {
            if (empty($data['slug'])) {
                $data['slug'] = Str::slug($data['title']);
            }
            $data['slug'] = $this->ensureUniqueSlug($data['slug'], $id);
        }

        $page->update($data);

        return $page->fresh();
    }

    /**
     * Delete a CMS page.
     */
    public function deletePage(int $id): bool
    {
        $page = CmsPage::findOrFail($id);

        // Delete associated image
        if ($page->image) {
            $this->deleteImage($page->image);
        }

        return $page->delete();
    }

    /**
     * Get a single CMS page by ID.
     */
    public function getPageById(int $id): CmsPage
    {
        return CmsPage::findOrFail($id);
    }

    /**
     * Handle image upload.
     */
    protected function handleImageUpload(UploadedFile $image): string
    {
        $filename = time().'_'.Str::random(10).'.'.$image->getClientOriginalExtension();
        $image->storeAs('public/cms-pages', $filename);

        return $filename;
    }

    /**
     * Delete an image file.
     */
    protected function deleteImage(string $filename): bool
    {
        return Storage::delete('public/cms-pages/'.$filename);
    }

    /**
     * Ensure slug is unique.
     */
    protected function ensureUniqueSlug(string $slug, ?int $excludeId = null): string
    {
        $originalSlug = $slug;
        $counter = 1;

        while (true) {
            $query = CmsPage::where('slug', $slug);

            if ($excludeId) {
                $query->where('id', '!=', $excludeId);
            }

            if (! $query->exists()) {
                break;
            }

            $slug = $originalSlug.'-'.$counter;
            $counter++;
        }

        return $slug;
    }
}
