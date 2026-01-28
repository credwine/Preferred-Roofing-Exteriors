# GitHub Pages Verification Script
$token = "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"
$repo = "credwine/Preferred-Roofing-Exteriors"
$baseUrl = "https://api.github.com/repos/$repo"

# Set up headers
$headers = @{
    Authorization = "Bearer $token"
    Accept = "application/vnd.github.v3+json"
    "User-Agent" = "GitHub-Pages-Checker"
}

Write-Host "=== GitHub Pages Verification ===" -ForegroundColor Cyan
Write-Host ""

# Check if index.html exists
Write-Host "1. Checking for index.html..." -ForegroundColor Yellow
if (Test-Path "index.html") {
    Write-Host "   [OK] index.html exists" -ForegroundColor Green
} else {
    Write-Host "   [ERROR] index.html NOT FOUND" -ForegroundColor Red
}

# Check if .nojekyll exists
Write-Host "2. Checking for .nojekyll..." -ForegroundColor Yellow
if (Test-Path ".nojekyll") {
    Write-Host "   [OK] .nojekyll exists" -ForegroundColor Green
} else {
    Write-Host "   [ERROR] .nojekyll NOT FOUND" -ForegroundColor Red
}

# Check if 404.html exists
Write-Host "3. Checking for 404.html..." -ForegroundColor Yellow
if (Test-Path "404.html") {
    Write-Host "   [OK] 404.html exists" -ForegroundColor Green
} else {
    Write-Host "   [ERROR] 404.html NOT FOUND" -ForegroundColor Red
}

# Check repository info
Write-Host "4. Checking repository information..." -ForegroundColor Yellow
try {
    $repoInfo = Invoke-RestMethod -Uri "$baseUrl" -Headers $headers -Method Get
    Write-Host "   [OK] Repository: $($repoInfo.full_name)" -ForegroundColor Green
    Write-Host "   [OK] Default Branch: $($repoInfo.default_branch)" -ForegroundColor Green
    Write-Host "   [OK] Private: $($repoInfo.private)" -ForegroundColor Green
} catch {
    Write-Host "   [ERROR] Error: $_" -ForegroundColor Red
}

# Check GitHub Pages status
Write-Host "5. Checking GitHub Pages configuration..." -ForegroundColor Yellow
try {
    $pages = Invoke-RestMethod -Uri "$baseUrl/pages" -Headers $headers -Method Get
    Write-Host "   [OK] Pages Status: $($pages.status)" -ForegroundColor Green
    Write-Host "   [OK] Source Branch: $($pages.source.branch)" -ForegroundColor Green
    Write-Host "   [OK] Source Path: $($pages.source.path)" -ForegroundColor Green
    Write-Host "   [OK] URL: $($pages.html_url)" -ForegroundColor Green
} catch {
    Write-Host "   [WARNING] Pages not configured or error: $_" -ForegroundColor Yellow
    Write-Host "   Attempting to configure Pages..." -ForegroundColor Yellow
    
    # Try to configure Pages
    $body = @{
        source = @{
            branch = "main"
            path = "/"
        }
    } | ConvertTo-Json
    
    try {
        Invoke-RestMethod -Uri "$baseUrl/pages" -Headers $headers -Method Put -Body $body -ContentType "application/json"
        Write-Host "   [OK] GitHub Pages configured successfully!" -ForegroundColor Green
    } catch {
        Write-Host "   [ERROR] Failed to configure: $_" -ForegroundColor Red
    }
}

# Check for common issues
Write-Host "6. Checking for common issues..." -ForegroundColor Yellow

# Check if CSS path is relative
$indexContent = Get-Content "index.html" -Raw
if ($indexContent -match 'href="css/style.css"') {
    Write-Host "   [OK] CSS path is relative" -ForegroundColor Green
} else {
    Write-Host "   [WARNING] CSS path might be absolute" -ForegroundColor Yellow
}

# Check if JS path is relative
if ($indexContent -match 'src="js/main.js"') {
    Write-Host "   [OK] JS path is relative" -ForegroundColor Green
} else {
    Write-Host "   [WARNING] JS path might be absolute" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "=== Verification Complete ===" -ForegroundColor Cyan
Write-Host ""
Write-Host "If Pages is configured, your site should be available at:" -ForegroundColor White
Write-Host "https://credwine.github.io/Preferred-Roofing-Exteriors/" -ForegroundColor Cyan
