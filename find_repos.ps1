$token = $env:GITHUB_TOKEN
if (-not $token) {
    Write-Error "GITHUB_TOKEN env var is not set. Set it before running this script."
    exit 1
}
$orgs = @("skillzza", "Skillzza", "skillzza-org", "skillzza-platform", "skillzza-official", "skillzza-ai", "skillzza-tech")

foreach ($org in $orgs) {
    $url = "https://$token@github.com/$org/skillzza-org.git"
    Write-Host "Testing: github.com/$org/skillzza-org ..." -NoNewline
    $result = git ls-remote $url HEAD 2>&1
    if ($LASTEXITCODE -eq 0) {
        Write-Host " FOUND! ✅" -ForegroundColor Green
    } else {
        Write-Host " Not found" -ForegroundColor Red
    }
}
