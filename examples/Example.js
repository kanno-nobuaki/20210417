
System.executeOnCScript();
System.initializeCurrentDirectory();

//commit test
// var file = new SFile("c:\\temp\\test.txt");
var path = "c:\\temp\\";
// var text = file.getTextFile("utf-8");
// text = text + "aaaa";
// file.setTextFile(text,"utf-8","\n",false);
// for (const elem of file.list()) {
// 	console.log(elem);
//   }

// for(elem in file.list()) {
// 	console.log("a"+elem);
// }
var file = new SFile(path);
var allfilse = file.list();
var text = "";
for(var i = 0; i < allfilse.length; i++) {
	// console.log(path+allfilse[i]);
	if(allfilse[i] === "out.txt") {
		continue;
	}
	var file = new SFile(path+allfilse[i]);
	text = text + "$$" + allfilse[i] + "\r\n";
	text = text + file.getTextFile("utf-8");
	// console.log(text);
}
var outfile = new SFile(path+"out.txt");
outfile.remove();
outfile.setTextFile(text,"utf-8","\n",false);

//  オープンモード

var FORREADING      = 1;    // 読み取り専用

var FORWRITING      = 2;    // 書き込み専用

var FORAPPENDING    = 8;    // 追加書き込み



//  開くファイルの形式

var TRISTATE_TRUE       = -1;   // Unicode

var TRISTATE_FALSE      =  0;   // ASCII

var TRISTATE_USEDEFAULT = -2;   // システムデフォルト



//  ファイル関連の操作を提供するオブジェクトを取得

var fs = new ActiveXObject( "Scripting.FileSystemObject" );



//  ファイルを読み取り専用で開く

var file = fs.OpenTextFile( path+"out.txt", FORREADING, true, TRISTATE_FALSE );


//  ファイルの文字データを一行ずつ表示する

while( !file.AtEndOfStream )  

{
	var str = file.ReadLine();
	var result = str.match( /\$\$/ );
	// console.log( result );
	System.sleep(1.0);
	if (result) {
		console.log( str );
	}

}

//  ファイルを閉じる

file.Close();



//  オブジェクトを解放

fs = null;

System.sleep(5.0);

