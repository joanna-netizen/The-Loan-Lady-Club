# Move marketing-loan-products from repo root into public (fix accidental placement)
$root = Split-Path -Parent (Split-Path -Parent $PSScriptRoot)
$src = Join-Path $root "marketing-loan-products"
$destDir = Join-Path $root "public"
$dest = Join-Path $destDir "marketing-loan-products"

if (-not (Test-Path $src)) {
    Write-Host "No marketing-loan-products folder found in repo root. It may already be in public/."
    exit 0
}

if (Test-Path $dest) {
    # Destination exists: move contents from root into public folder
    Get-ChildItem $src -Force | Move-Item -Destination $dest -Force
    Remove-Item $src -Recurse -Force
    Write-Host "Moved contents from root/marketing-loan-products into public/marketing-loan-products"
} else {
    Move-Item -Path $src -Destination $destDir -Force
    Write-Host "Moved root/marketing-loan-products to public/marketing-loan-products"
}

Write-Host "Done. Folder is now at public/marketing-loan-products"
