Const desiredScore = 9.1  ' just  nice to have this at the top

Browser("Advantage Shopping").Page("Advantage Shopping").Link("HeadphonesCategoryTxt").Click
Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Beats Studio 2 Over-Ear").Click
'Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").WaitProperty "innerhtml", 9.3, 10000
foo = Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").Exist (20)

currentScore = cDbl(Browser("Advantage Shopping").Page("Advantage Shopping").WebElement("Score").GetROProperty("innerhtml") )
print currentScore &"|"& desiredScore  &"|"& currentScore > desiredScore
If currentScore >= desiredScore Then
	Reporter.ReportEvent micPass, "checkScore", "Score exceeded the desired value of " & desiredScore
Else 
	Reporter.ReportEvent micFail, "checkScore", "Score is too low. Found " & currentScore & " and need " & desiredScore
End If
Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME").Click @@ hightlight id_;_Browser("Advantage Shopping").Page("Advantage Shopping").Link("HOME")_;_script infofile_;_ZIP::ssf11.xml_;_
