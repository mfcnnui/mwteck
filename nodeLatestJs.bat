::2014/11/15 by xiao_hua
title ��ͬһ�ļ��������²�����js�ļ�node�ĳ���
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