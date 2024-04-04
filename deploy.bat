@echo off

echo [Note] Begin of deploy.bat

Rem Source directory in Windows(local)
set "sourceDir=C:\Users\Admin\Desktop\taksong\bridgeLcsToDaeri"

Rem Linux(remote) account name
set "destUser=root"

Rem Linux(remote) IP
set "destHost=172.17.20.13"

Rem Linux(remote) port
set "destPort=9999"

Rem Destination directory in Linux(remote)
set "destDir=/opt/bridgeLcsToDaeri"

Rem List of excluded directories
set "excludedDirs=.git .idea node_modules"

echo [Note] Transferring directory %sourceDir% to %destUser%@%destHost%:%destDir%
for /d %%i in ("%sourceDir%\*") do (
     echo Transferring directory: %%~nxi
        echo %%~nxi|findstr /i /b /e /l /x "%excludedDirs%" >nul || (
            scp -P "%destPort%" -prq "%%i\." "%destUser%"@"%destHost%":"%destDir%" && (
                echo Directory transferred successfully: %%~nxi
            ) || (
                echo Failed to transfer directory: %%~nxi
            )
        )
)

Rem Name of install script
set "scriptToRun=install.sh"

echo [Note] Executing remote script(%destDir%/%scriptToRun%)
ssh -p "%destPort%" "%destUser%"@"%destHost%" "chmod +x %destDir%/%scriptToRun% && sh %destDir%/%scriptToRun%"

echo [Note] End of deploy.bat

pause
