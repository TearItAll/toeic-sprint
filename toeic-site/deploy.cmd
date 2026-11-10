@echo off
chcp 65001 >nul
cd /d "%~dp0"
echo [1/2] 安裝同步功能需要的套件...
call npm install --no-audit --no-fund || goto :fail
echo [2/2] 部署到 Netlify（第一次會開瀏覽器請你登入並選擇網站）...
call npx --yes netlify-cli deploy --prod || goto :fail
echo.
echo 部署完成。
pause
exit /b 0
:fail
echo.
echo 部署失敗，請把上面的訊息截圖給 Claude 看。
pause
exit /b 1
