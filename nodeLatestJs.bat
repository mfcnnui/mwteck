::2014/11/15 by xiao_hua
title 将同一文件夹下最新产生的js文件node的程序
color f0
dir /b/o-d> tmp.txt
set filename=null
for /f "delims= " %%i in (tmp.txt) do (
	if /i "%%~xi"==".js" (
		set filename=%%i
		goto done
	)
)
:done
del tmp.txt
if not %filename%==null (
	cls
	node %filename% 
	pause
)