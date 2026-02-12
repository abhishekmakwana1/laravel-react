# GitHub Actions CI/CD Setup Guide

This guide will help you set up Continuous Integration and Continuous Deployment for your Laravel + React application using GitHub Actions.

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Quick Start](#quick-start)
- [CI Workflow (Automated Testing)](#ci-workflow-automated-testing)
- [CD Workflow (Deployment)](#cd-workflow-deployment)
- [GitHub Secrets Configuration](#github-secrets-configuration)
- [Deployment Options](#deployment-options)
- [Troubleshooting](#troubleshooting)

---

## Prerequisites

✅ GitHub account created  
✅ Git repository initialized  
✅ Code pushed to GitHub  

## Quick Start

### 1. Push Your Code to GitHub

If you haven't already created a repository:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

### 2. Verify Workflows

Once pushed, GitHub Actions will automatically detect the workflow files in `.github/workflows/`:

1. Go to your repository on GitHub
2. Click on the **"Actions"** tab
3. You should see two workflows:
   - ✅ **CI - Continuous Integration**
   - 🚀 **CD - Continuous Deployment**

### 3. Watch Your First CI Run

The CI workflow will automatically run on your first push. You can watch it in real-time:

1. Click on the **"Actions"** tab
2. Click on the latest workflow run
3. Watch each step execute

---

## CI Workflow (Automated Testing)

The CI workflow runs automatically on every push and pull request to `main`, `develop`, or `staging` branches.

### What It Does

✅ **Code Quality Checks**
- Laravel Pint (PHP code style)
- ESLint (JavaScript/React linting)
- Prettier (code formatting)

✅ **Testing**
- PHPUnit tests with MySQL database
- Frontend build verification

✅ **Build Artifacts**
- Compiles production assets
- Stores build outputs for 7 days

### Customizing CI

Edit `.github/workflows/ci.yml` to:

- **Change PHP version**: Modify `php-version: '8.2'`
- **Change Node version**: Modify `node-version: '20'`
- **Add more tests**: Add steps after the existing test steps
- **Skip certain checks**: Comment out steps you don't need

---

## CD Workflow (Deployment)

The deployment workflow runs when you push to `main` or `production` branches, or manually trigger it.

### Manual Deployment Trigger

1. Go to **Actions** tab
2. Click **"CD - Continuous Deployment"**
3. Click **"Run workflow"**
4. Select branch and click **"Run workflow"**

### Configuring Deployment

The deployment workflow includes templates for multiple hosting types. Choose the one that matches your setup:

---

## Deployment Options

### Option 1: VPS/Cloud Server (SSH Deployment)

**Best for:** DigitalOcean, AWS EC2, Linode, custom VPS

#### Setup Steps:

1. **Generate SSH Key** (on your local machine):
   ```bash
   ssh-keygen -t ed25519 -C "github-actions"
   ```

2. **Add public key to server**:
   ```bash
   # Copy the public key
   cat ~/.ssh/id_ed25519.pub
   
   # On your server, add it to authorized_keys
   echo "YOUR_PUBLIC_KEY" >> ~/.ssh/authorized_keys
   ```

3. **Add secrets to GitHub**:
   - `SSH_HOST`: Your server IP or domain
   - `SSH_USERNAME`: SSH username (e.g., `root` or `ubuntu`)
   - `SSH_PRIVATE_KEY`: Content of `~/.ssh/id_ed25519`
   - `SSH_PORT`: SSH port (default: `22`)
   - `PROJECT_PATH`: Full path to your project (e.g., `/var/www/html/myapp`)

4. **Uncomment SSH deployment section** in `.github/workflows/deploy.yml`:
   ```yaml
   # Remove the # from lines 37-50
   - name: Deploy to Server via SSH
     uses: appleboy/ssh-action@v1.0.0
     # ... rest of the configuration
   ```

---

### Option 2: Shared Hosting (FTP Deployment)

**Best for:** cPanel, shared hosting providers

#### Setup Steps:

1. **Get FTP credentials** from your hosting provider

2. **Add secrets to GitHub**:
   - `FTP_SERVER`: FTP server address (e.g., `ftp.yoursite.com`)
   - `FTP_USERNAME`: FTP username
   - `FTP_PASSWORD`: FTP password

3. **Uncomment FTP deployment section** in `.github/workflows/deploy.yml`:
   ```yaml
   # Remove the # from lines 52-64
   - name: Deploy to Server via FTP
     uses: SamKirkland/FTP-Deploy-Action@v4.3.4
     # ... rest of the configuration
   ```

4. **Important for shared hosting**:
   - Upload `.env` file manually (it's excluded from FTP sync)
   - Run `composer install` and `php artisan migrate` via SSH or cPanel terminal
   - Make sure `storage` and `bootstrap/cache` are writable

---

### Option 3: Laravel Forge

**Best for:** Managed Laravel hosting

#### Setup Steps:

1. **Get deployment webhook** from Forge:
   - Go to your site in Forge
   - Click **"Apps"** → **"Deploy"**
   - Copy the **"Deploy Webhook URL"**

2. **Add secret to GitHub**:
   - `FORGE_DEPLOY_WEBHOOK`: The webhook URL from Forge

3. **Uncomment Forge deployment section** in `.github/workflows/deploy.yml`:
   ```yaml
   # Remove the # from lines 66-68
   - name: Deploy to Laravel Forge
     run: |
       curl -X POST "${{ secrets.FORGE_DEPLOY_WEBHOOK }}"
   ```

---

### Option 4: Laravel Vapor

**Best for:** Serverless Laravel on AWS

#### Setup Steps:

1. **Install Vapor CLI** locally and configure:
   ```bash
   composer require laravel/vapor-cli
   vapor login
   ```

2. **Add Vapor credentials to GitHub**:
   - `VAPOR_API_TOKEN`: Get from vapor.laravel.com

3. **Uncomment Vapor deployment section** in `.github/workflows/deploy.yml`:
   ```yaml
   # Remove the # from lines 70-73
   - name: Deploy to Laravel Vapor
     run: |
       composer require laravel/vapor-cli
       vapor deploy production
   ```

---

## GitHub Secrets Configuration

### How to Add Secrets

1. Go to your GitHub repository
2. Click **"Settings"** → **"Secrets and variables"** → **"Actions"**
3. Click **"New repository secret"**
4. Add the required secrets based on your deployment option

### Common Secrets

| Secret Name | Description | Example |
|-------------|-------------|---------|
| `SSH_HOST` | Server IP or domain | `192.168.1.100` or `myapp.com` |
| `SSH_USERNAME` | SSH username | `ubuntu` or `root` |
| `SSH_PRIVATE_KEY` | Private SSH key content | Contents of `~/.ssh/id_ed25519` |
| `SSH_PORT` | SSH port | `22` (default) |
| `PROJECT_PATH` | Full path to project | `/var/www/html/myapp` |
| `FTP_SERVER` | FTP server address | `ftp.mysite.com` |
| `FTP_USERNAME` | FTP username | `user@mysite.com` |
| `FTP_PASSWORD` | FTP password | `your-password` |
| `FORGE_DEPLOY_WEBHOOK` | Forge webhook URL | `https://forge.laravel.com/...` |

---

## Troubleshooting

### CI Workflow Fails

#### "Laravel Pint failed"
```bash
# Run locally to see errors
./vendor/bin/pint

# Auto-fix issues
./vendor/bin/pint
```

#### "ESLint failed"
```bash
# Run locally to see errors
npm run lint

# Auto-fix issues
npm run lint:fix
```

#### "Prettier check failed"
```bash
# Auto-fix formatting
npm run format
```

#### "PHPUnit tests failed"
```bash
# Run tests locally
php artisan test

# Run specific test
php artisan test --filter=TestName
```

### Deployment Workflow Fails

#### "SSH connection failed"
- Verify `SSH_HOST`, `SSH_USERNAME`, and `SSH_PORT` are correct
- Ensure SSH key is added to server's `~/.ssh/authorized_keys`
- Check server firewall allows SSH connections

#### "FTP upload failed"
- Verify FTP credentials are correct
- Check FTP server allows connections from GitHub IPs
- Ensure target directory exists and is writable

#### "Permission denied on server"
```bash
# On your server, fix permissions
sudo chown -R www-data:www-data /var/www/html/myapp
sudo chmod -R 775 /var/www/html/myapp/storage
sudo chmod -R 775 /var/www/html/myapp/bootstrap/cache
```

---

## Best Practices

### Branch Strategy

- **`main`**: Production-ready code (triggers deployment)
- **`develop`**: Development branch (runs CI only)
- **`staging`**: Staging environment (optional deployment)
- **Feature branches**: Create from `develop`, merge via PR

### Workflow

1. Create feature branch from `develop`
2. Make changes and push
3. CI runs automatically
4. Create Pull Request to `develop`
5. Review and merge
6. When ready, merge `develop` → `main`
7. Deployment triggers automatically

### Security

- ✅ Never commit `.env` files
- ✅ Use GitHub Secrets for sensitive data
- ✅ Rotate SSH keys periodically
- ✅ Use separate database for testing
- ✅ Review deployment logs regularly

---

## Next Steps

1. ✅ Push code to GitHub
2. ✅ Watch CI workflow run
3. ✅ Configure deployment secrets
4. ✅ Test deployment workflow
5. ✅ Set up branch protection rules
6. ✅ Configure notifications (optional)

---

## Need Help?

- **GitHub Actions Docs**: https://docs.github.com/en/actions
- **Laravel Deployment**: https://laravel.com/docs/deployment
- **Forge Documentation**: https://forge.laravel.com/docs
- **Vapor Documentation**: https://docs.vapor.build

---

**Happy Deploying! 🚀**
