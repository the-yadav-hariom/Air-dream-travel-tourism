@echo off
cd /d "%~dp0"
title Creating Junaid Full Project ZIP...
echo ============================================================
echo   Creating Junaid Full Project ZIP Archive...
echo ============================================================
echo Compressing files (excluding .git and existing zip files)...

powershell -NoProfile -ExecutionPolicy Bypass -Command "$items = (Get-ChildItem -Path . -Exclude '.git','*.zip').FullName; Compress-Archive -Path $items -DestinationPath 'junaid-full-project.zip' -Force"

echo.
if exist "junaid-full-project.zip" (
    echo ============================================================
    echo SUCCESS: junaid-full-project.zip created successfully!
    echo File: %~dp0junaid-full-project.zip
    echo ============================================================
) else (
    echo An error occurred while creating the ZIP file.
)
pause
