<?php

declare(strict_types=1);

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Requests\Admin\StoreCmsPageRequest;
use App\Http\Requests\Admin\UpdateCmsPageRequest;
use App\Services\CmsPageService;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class CmsPageController extends Controller
{
    public function __construct(
        protected CmsPageService $cmsPageService
    ) {}

    public function index(Request $request): Response
    {
        $filters = $request->only(['is_active', 'sort_by', 'sort_order']);

        $pages = $this->cmsPageService->getAllPages($filters);
        $stats = $this->cmsPageService->getPageStats();

        return Inertia::render('Admin/CmsPages/Index', [
            'pages' => $pages,
            'stats' => $stats,
            'filters' => $filters,
        ]);
    }

    public function create(): Response
    {
        return Inertia::render('Admin/CmsPages/Create');
    }

    public function store(StoreCmsPageRequest $request)
    {
        $this->cmsPageService->createPage($request->validated());

        return redirect()->route('admin.cms-pages.index')
            ->with('success', 'CMS Page created successfully!');
    }

    public function edit(int $id): Response
    {
        $page = $this->cmsPageService->getPageById($id);

        return Inertia::render('Admin/CmsPages/Edit', [
            'page' => $page,
        ]);
    }

    public function update(UpdateCmsPageRequest $request, int $id)
    {
        $this->cmsPageService->updatePage($id, $request->validated());

        return redirect()->route('admin.cms-pages.index')
            ->with('success', 'CMS Page updated successfully!');
    }

    public function destroy(int $id)
    {
        $this->cmsPageService->deletePage($id);

        return redirect()->route('admin.cms-pages.index')
            ->with('success', 'CMS Page deleted successfully!');
    }
}
