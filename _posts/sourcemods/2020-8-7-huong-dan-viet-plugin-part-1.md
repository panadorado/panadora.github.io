---
thumbnail: "SourceMod/202086SourceModLogo.png"
layout: "post"
title: "Hướng dẫn về Plugins SourceMode (Part 1)"
excerpt: "Hướng dẫn này sẽ cung cấp cho bạn một giới thiệu cơ bản để viết một plugin Sourcemod..."
author: "Panadora"
category: [SourceMod, games]
permalink: "sourcemods/huong-dan-viet-plugin-part-1.html"
---

![image-logo]({{baseurl}}/image/SourceMod/logo.png){:width="100%"}

Hướng dẫn này sẽ cung cấp cho bạn một giới thiệu cơ bản để viết một plugin Sourcemod. Nếu bạn không quen thuộc với ngôn ngữ SourcePawn, đó là khuyến cáo rằng bạn ít nhất một thời gian ngắn đọc giới thiệu về bài viết SourcePawn .

<hr>
Hướng dẫn này sẽ cung cấp cho bạn một giới thiệu cơ bản để viết một plugin Sourcemod. Nếu bạn không quen thuộc với ngôn ngữ SourcePawn, đó là khuyến cáo rằng bạn ít nhất một thời gian ngắn đọc giới thiệu về bài viết SourcePawn.

 • [SpEdit](https://forums.alliedmods.net/showthread.php?t=259917) `Khuyên dùng vì nó gần như đầy đủ từ file compile.exe đến thư viện viết plugins SourceMod`<br>
 • [Crimsion Editor](https://www.crimsoneditor.com/)<br>
 • [PsPad](http://www.pspad.com/)<br>
 • [UltraEdit](http://www.ultraedit.com/)<br>
 • [Notepad++](https://notepad-plus-plus.org/)<br>
 • [TextPad](https://www.textpad.com/)<br>
 • [Pawn Studio](http://sourceforge.net/projects/pawnstudio/)<br>
 • [BasicPawn](https://forums.alliedmods.net/showthread.php?t=289127)<br>
 • Và một số trình biên soạn khác...<br>
<hr>

## 1.Giới thiệu 1 chút về [**`SpEdit`**](https://forums.alliedmods.net/showthread.php?t=259917) ##
<hr>

<center><img class="img-thumbnail image-post" src="{{baseurl}}/image/SourceMod/logoSpEdit.png"></center>
<br>
Mở trình biên dịch SpEdit.exe lên và khởi tạo một file có đuôi là .sp ví dụ untitle.sp
Khai báo thư viện như C/C++ sẽ có lệnh như sau: **`#include 'tên file nguồn'`**. Để trình biên soạn dẫn và đọc file nguồn để ghi nhớ câu lệnh.

## 2.Thiết lập thông tin cho plugins ##
<hr>

Bây giờ chúng ta đã có quyền truy cập vào các tính năng của SourceMod, đã đến lúc thiết lập thông tin sẽ được hiển thị thông qua lệnh sm plugins list. Không ai thích các plugin không tên. 

Để làm điều đó, chúng ta sẽ xem xét bên trong tệp **`sourcemod.inc`** và xem định dạng thông tin sẽ được khai báo. 

Luôn luôn hữu ích khi xem bên trong SM bao gồm các tệp để tìm hiểu thông tin bạn không biết. Ngoài ra còn có một tài liệu API nhưng nó có thể bị lỗi thời và nó chỉ có các tệp lõi SM nên nếu plugin của bạn sẽ sử dụng bất kỳ tiện ích mở rộng của bên thứ ba hoặc plugin nào khác, **`bạn sẽ phải nghiên cứu các file inc`**.

Vì vậy, hãy mở **`sourcemod.inc`** và cuộn xuống một chút cho đến khi bạn thấy điều này:

```java

    // Plugin public information.
    struct Plugin
    {
        public const char[] name;                  /**< Tên Plugin */
        public const char[] description            /**< Mô tả Plugin */
        public const char[] author;              /**< Tác giả viết Plugin */
        public const char[] version;             /**< Phiên bản Plugin */
        public const char[] url;                /**< Link Nguồn Plugin */
    };

```
và đây:

```java

    /*
        * Khai báo đây là một cấu trúc trong plugin của bạn để hiển thị thông tin của nó.
        * Ví dụ
        */

    public Plugin myinfo =
    {
        name = <ten_plugin>;
        //tiếp... 
    }

```
Nó cho chúng ta biết rằng chúng ta cần tạo một biến **`public Plugin myinfo`**, biến này phải thuộc loại Plugin, là một cấu trúc có 5 trường mà và thuộc kiểu dữ liệu là các chuỗi. 

Nghe có vẻ phức tạp đối với người mới bắt đầu nhưng rất dễ dàng. Hãy tiếp tục và tạo một cái:

```java

    #include <sourcemod>
    
    public Plugin myinfo =
    {
        name = "My First Plugin",
        author = "Me",
        description = "My first plugin ever",
        version = "1.0",
        url = "http://www.sourcemod.net/"
    };

```

## 3.Bắt mã để chạy ##
<hr>

chúng ta đã bao gồm các tính năng của SourceMod và thông tin bổ sung hoặc plugin. Bây giờ chúng ta có một plugin được định dạng hoàn hảo có thể được biên dịch và tải bởi SourceMod. 

Tuy nhiên, có một vấn đề - nó không làm gì cả. Bạn có thể bắt đầu viết mã sau khai báo **`myinfo`** chỉ để thấy rằng nó sẽ không biên dịch. **`SourcePawn`**, không giống như các ngôn ngữ kịch bản khác như **`Lua`**, không cho phép mã nằm ngoài các hàm. Sau khi đọc điều đó, có lẽ bạn chỉ muốn xác định một số chức năng, đặt tên chính là có thể, biên dịch và tải một plugin và thấy rằng mã của bạn không bao giờ được gọi. 

Vì vậy, làm thế nào để chúng ta gọi **`SourceMod`** mã của chúng ta? Vì lý do chính xác này, chúng ta phải chuyển tiếp. Chuyển tiếp là các nguyên mẫu hàm do một bên khai báo có thể được bên khác triển khai dưới dạng gọi lại. Khi bên thứ nhất bắt đầu cuộc gọi chuyển tiếp, tất cả các bên có cuộc gọi lại phù hợp sẽ nhận cuộc gọi. 

**`SourceMod`** khai báo rất nhiều chuyển tiếp thú vị mà chúng ta có thể triển khai. Như bạn có thể thấy, chuyển tiếp là cách duy nhất để mã của chúng ta được thực thi, hãy ghi nhớ điều đó. Vì vậy, hãy thực hiện **`OnPluginStart`** về phía trước. Như bạn có thể đoán, nó được gọi khi plugin của chúng ta khởi động. Để làm điều đó, chúng ta sẽ phải tra cứu khai báo của **`OnPluginStart`**. Nó được khai báo bên trong **`sourcemod.inc`**, một tệp chúng ta đã quen thuộc.

Dấu ngoặc đơn trống cho chúng ta biết rằng không có đối số nào được chuyển vào bên trong **`forward`** này, tài liệu bên trong **`@noreturn`** cho chúng ta biết rằng chúng ta không phải trả về bất cứ thứ gì, khá đơn giản về phía trước. 

Vậy làm thế nào để viết một cuộc gọi lại chính xác cho nó? Thứ nhất, lệnh gọi lại của chúng ta phải có cùng tên, vì vậy đó là **`OnPluginStart`**, thứ hai, lệnh gọi lại của chúng ta phải có cùng số lượng đối số, không có đối số nào trong trường hợp này và cuối cùng, **`SourceMod`** cần có thể gọi lệnh gọi lại của chúng ta nên nó cần được công khai. Vì vậy, việc triển khai trông như thế này:

```java

  /**
        * Được gọi khi plugin được khởi tạo hoàn toàn và tất cả các tham chiếu bên ngoài đã biết
        * được giải quyết. Điều này chỉ được gọi một lần trong vòng đời của plugin và
        * được ghép nối với OnPluginEnd().
        *
        * Nếu bất kỳ lỗi thời gian chạy nào được đưa ra trong quá trình gọi lại này, plugin sẽ được đánh dấu
        * như không thành công.
        *
        * Không cần thiết phải đóng bất kỳ handles hoặc loại bỏ hooks trong function này.  
        * SourceMod đảm bảo rằng plugin tắt tự động và phát hành chính xác 
        * tất cả tài nguyên.
        *
        * @noreturn
        */

    forward void OnPluginStart();
    {
        
    }

```
Bây giờ chúng ta có thể viết mã bên trong dấu ngoặc nhọn và nó sẽ được thực thi khi plugin của chúng ta khởi động. Hãy xuất **`"Hello world!"`** đến bảng điều khiển máy chủ. 

Để làm điều đó, chúng ta sẽ sử dụng chức năng **`PrintToServer`**. Nó được khai báo bên trong **`console.inc`**, tuy nhiên, chúng ta không cần phải bao gồm **`console.inc`** theo cách thủ công vì nó được tự động đưa vào như một phần của **`sourcemod.inc`**.

```java

    /**
        * Print message đến bảng điều khiển máy chủ.
        *
        * @param format		Quy tắc định dạng.
        * @param ...			Số lượng tham số định dạng thay đổi.
        * @noreturn
        */
    native int PrintToServer(const char[] format, any ...);

```

Như bạn có thể thấy, đây là một hàm gốc. Nó được thực hiện bên trong lõi SM. Đánh giá bằng các đối số của nó, chúng ta có thể thấy rằng nó là một hàm lớp định dạng. Tuy nhiên, hiện tại chúng ta không cần bất kỳ định dạng nào, vì vậy chúng ta chỉ cần chuyển chuỗi  **`"Hello world!"`** như là một đối số duy nhất:

```java

    public void OnPluginStart()
    {
        PrintToServer("Hello world!");
    }

```

Code đầy đủ trong một plugin chúng ta vừa viết có dạng như sau:

```java

    #include <sourcemod>
    
    public Plugin myinfo =
    {
        name = "My First Plugin",
        author = "Me",
        description = "My first plugin ever",
        version = "1.0",
        url = "http://www.sourcemod.net/"
    };
    
    public void OnPluginStart()
    {
        PrintToServer("Hello world!");
    }

```

Biên dịch và up plugin của bạn lên máy chủ của bạn và tự mình thấy rằng thông báo được hiển thị trong bảng điều khiển máy chủ.

## Includes ##
<hr>

Pawn yêu cầu các tệp bao gồm, giống như C yêu cầu tệp tiêu đề. Bao gồm các tệp liệt kê tất cả các cấu trúc, chức năng, lệnh gọi lại và thẻ có sẵn. Có ba loại tệp bao gồm:

 • Core - **`sourcemod.inc`** và bất cứ thứ gì nó bao gồm. Tất cả đều được cung cấp bởi SourceMod's Core.<br>
 • Extension - thêm phần phụ thuộc vào một phần mở rộng nhất định.<br>
 • Plugin - thêm phụ thuộc vào một plugin nhất định.<br>    

Bao gồm các tệp được tải bằng cách sử dụng chỉ thị trình biên dịch **`#include`**.

## Commands ##
<hr>

Ví dụ đầu tiên của chúng ta sẽ viết một lệnh Admin đơn giản để Slap một Player. Chúng ta sẽ tiếp tục mở rộng ví dụ này với nhiều tính năng hơn cho đến khi chúng ta có kết quả cuối cùng, hoàn chỉnh.

## Khai báo ##
<hr>

Trước tiên, hãy xem một lệnh Admim yêu cầu những gì. Các lệnh admin được register bằng cách khai báo hàm**`RegAdminCmd`**. Chúng yêu cầu **"chuỗi lệnh thực thi"**, **hàm được gọi**, **cờ admin (flag)**.

Khai báo function, cách thức sử dụng [**tại đây**](https://sm.alliedmods.net/new-api/console/ConCmd)

Cách viết:

```java

    public void OnPluginStart()
    {
        RegAdminCmd("sm_myslap", Command_MySlap, ADMFLAG_SLAY);
    }
    
    public Action Command_MySlap(int client, int args)
    {
        
    }

```

Bây giờ chúng tata đã thực hiện thành công một lệnh - mặc dù nó chưa thực hiện được gì. Trong thực tế, nó sẽ báo "Lệnh không xác định" nếu bạn sử dụng nó! Điều này là do bạn không trả về Plugin_Handled trong cuộc gọi lại của bạn.

Vì bạn chưa đăng ký nên **`SourceMod`** tin rằng bạn không muốn **`Source Engine`** biết lệnh đã được đăng ký và nó xử lý như vậy. Do **`SourceMod`** mong đợi **`function`** của bạn **`return Plugin_Handled`** là do thẻ Action bạn đặt trong nguyên mẫu của hàm. Thẻ Hành động chỉ định rằng **`Command_MySlap`** phải trả về một trong bốn điều. Xem liệt kê [**Action**](https://sm.alliedmods.net/new-api/core/Action) trong **`API sourcemod`** để tìm hiểu thêm về các loại trả lại này và khi nào sử dụng chúng.

```java

    public Action Command_MySlap(int client, int args)
    {
        return Plugin_Handled;
    }

```

Bây giờ lệnh sẽ không báo lỗi, nhưng nó vẫn không làm gì cả. Điều này là do việc trả về "Plugin_Handled" trong lệnh gọi lại lệnh sẽ ngăn engine xử lý lệnh. Động cơ thậm chí sẽ không bao giờ thấy rằng lệnh đã được chạy. Đây là những gì bạn sẽ muốn làm nếu bạn đang đăng ký một lệnh hoàn toàn mới thông qua **`SourceMod`**.

## Thực thi ##
<hr>

Hãy quyết định lệnh sẽ như thế nào. Hãy để nó hoạt động giống như lệnh sm_slap mặc định:

```java

    sm_myslap <name|#userid> [damage]

```

Để thực hiện điều này, chúng ta sẽ cần một vài bước:

 • Get the input from the console. For this we use [**GetCmdArg()**](https://sm.alliedmods.net/new-api/console/GetCmdArg).
 • Find a matching player. For this we use [**FindTarget()**](https://sm.alliedmods.net/new-api/helpers/FindTarget).
 • Slap them. For this we use [**SlapPlayer()**](https://sm.alliedmods.net/new-api/sdktools_functions/SlapPlayer), which requires including sdktools, an extension bundled with SourceMod.
 • Respond to the admin. For this we use [**ReplyToCommand()**](https://sm.alliedmods.net/new-api/console/ReplyToCommand).

 Ví dụ mẫu đầy đủ:

 ```java

    #include <sourcemod>
    #include <sdktools>
    
    public Plugin myinfo =
    {
        name = "My First Plugin",
        author = "Me",
        description = "My first plugin ever",
        version = "1.0.0.0",
        url = "http://www.sourcemod.net/"
    }
    
    public void OnPluginStart()
    {
        RegAdminCmd("sm_myslap", Command_MySlap, ADMFLAG_SLAY);

        // Bắt buộc đối với câu trả lời không thành công của FindTarget
        LoadTranslations("common.phrases.txt"); 
    }
    
    public Action Command_MySlap(int client, int args)
    {
        char arg1[32], arg2[32];
    
        /* Theo mặc định, chúng ta đặt damage = 0 */
        int damage = 0;
    
        /* Lấy đối số đầu tiên */
        GetCmdArg(1, arg1, sizeof(arg1));
    
        /* Nếu có từ 2 đối số trở lên, chúng ta đặt damage cho
                    * những gì người dùng chỉ định. Nếu một thiệt hại không được chỉ định
                    * sau đó nó sẽ ở mức 0. 
                    */
        if (args >= 2)
        {
            GetCmdArg(2, arg2, sizeof(arg2));
            damage = StringToInt(arg2);
        }
    
        /* Try and find a matching player */
        int target = FindTarget(client, arg1);
        if (target == -1)
        {
            /* FindTarget() tự động trả lời với
                                * lý do thất bại và trả về -1 nên chúng ta biết 0
                                * tiếp tục...
                                */
            return Plugin_Handled;
        }
    
        SlapPlayer(target, damage);
        ReplyToCommand(client, "[SM] You slapped %N for %d damage!", target, damage);
    
        return Plugin_Handled;
    }

 ```

 Để biết thêm thông tin về %N và %d là gì, hãy xem [**function**](https://wiki.alliedmods.net/Format_Class_Functions_(SourceMod_Scripting)) lớp định dạng. Lưu ý rằng bạn không bao giờ cần hủy đăng ký hoặc xóa lệnh Admin của mình. Khi một plugin được tải xuống, SourceMod sẽ dọn dẹp nó cho bạn.

## ConVars ##
<hr>

Tính năng tiện dụng của **`ConVars`** là chúng dễ dàng cấu hình cho người dùng. Chúng có thể được đặt trong bất **`file .cfg`** nào, chẳng hạn như **`server.cfg`** hoặc **`sourcemod.cfg`**. Để làm cho việc này dễ dàng hơn, SourceMod có chức năng [**AutoExecConfig()**](https://sm.alliedmods.net/new-api/sourcemod/AutoExecConfig). Chức năng này sẽ tự động tạo một **`file .cfg`** mặc định chứa tất cả các **`cvars`** của bạn, được chú thích bằng nhận xét, cho người dùng. Rất khuyến khích bạn gọi nó nếu bạn có **`ConVars`** có thể tùy chỉnh.

Hãy mở rộng ví dụ của bạn từ trước với một ConVar mới. ConVar của chúng tôi sẽ là **`g_cvarMySlapDamage`** và sẽ chỉ định **`damage`** mặc định mà ai đó bị tát nếu không có thiệt hại nào được chỉ định.

```java

    ConVar g_cvarMySlapDamage = null;
    
    public void OnPluginStart()
    {
        RegAdminCmd("sm_myslap", Command_MySlap, ADMFLAG_SLAY);
    
        g_cvarMySlapDamage = CreateConVar("sm_myslap_damage", "5", "Default slap damage");
        AutoExecConfig(true, "plugin_myslap");
    }
    
    public Action Command_MySlap(int client, int args)
    {
        char arg1[32], arg2[32];
        int damage = g_cvarMySlapDamage.IntValue;
    
        /* Phần còn lại vẫn không thay đổi! */
    

```

## Hiển thị Hoạt động, Ghi nhật ký ##
<hr>

Hầu hết tất cả các lệnh Admin sẽ ghi lại hoạt động của chúng và một số lệnh Admin sẽ hiển thị hoạt động của chúng cho các Client trong trò chơi. Điều này có thể được thực hiện thông qua các function [**LogAction()**](https://sm.alliedmods.net/new-api/logging/LogAction) và [**ShowActivity2()**](https://sm.alliedmods.net/new-api/console/ShowActivity2). Chức năng chính xác của **`ShowActivity2()`** được xác định bởi cvar **`sm_show_activity`**.

```java

        SlapPlayer(target, damage);
    
        char name[MAX_NAME_LENGTH];
    
        GetClientName(target, name, sizeof(name));
    
        ShowActivity2(client, "[SM] ", "Slapped %s for %d damage!", name, damage);
        LogAction(client, target, "\"%L\" slapped \"%L\" (damage %d)", client, target, damage);
    
        return Plugin_Handled;
    }

```

## Multiple Targets ##
<hr>

Để hoàn thành đầy đủ phần thực thi Slap của chúng ta, hãy làm cho nó hỗ trợ **`multiple targets`**. [**targeting sytem**](https://wiki.alliedmods.net/Admin_Commands_(SourceMod)#How_to_Target) của SourceMod khá tiên tiến, vì vậy việc sử dụng nó lúc đầu có vẻ phức tạp.

Hàm chúng tôi sử dụng là [**ProcessTargetString()**](https://sm.alliedmods.net/new-api/commandfilters/ProcessTargetString). Nó nhận đầu vào từ bảng điều khiển và trả về danh sách các máy khách phù hợp. Nó cũng trả về một danh từ sẽ xác định một khách hàng duy nhất hoặc mô tả một danh sách các khách hàng. Ý tưởng là sau đó mỗi Client sẽ được xử lý, nhưng hoạt động hiển thị cho tất cả người chơi chỉ được xử lý một lần. Điều này làm **`spam message`** trên màn hình.

Phương pháp xử lý đích này được sử dụng cho hầu hết mọi lệnh Admin trong SourceMod và trên thực tế, **`FindTarget()`** chỉ là một phiên bản đơn giản hóa.

```java

    #include <sourcemod>
    #include <sdktools>
    
    ConVar g_cvarMySlapDamage = null;
    
    public Plugin myinfo =
    {
        name = "My First Plugin",
        author = "Me",
        description = "My first plugin ever",
        version = "1.0.0.0",
        url = "http://www.sourcemod.net/"
    }
    
    public void OnPluginStart()
    {
        RegAdminCmd("sm_myslap", Command_MySlap, ADMFLAG_SLAY);
        LoadTranslations("common.phrases.txt");
    
        g_cvarMySlapDamage = CreateConVar("sm_myslap_damage", "5", "Default slap damage");
        AutoExecConfig(true, "plugin_myslap");
    }
    
    public Action Command_MySlap(int client, int args)
    {
        char arg1[32], arg2[32];
        int damage = g_cvarMySlapDamage.IntValue;
    
        /* Get the first argument */
        GetCmdArg(1, arg1, sizeof(arg1));
    
        /*Nếu có 2 hoặc nhiều đối số và đối số thứ hai tìm nạp
         * thành công, hãy chuyển nó thành một số nguyên.
         */
        if (args >= 2 && GetCmdArg(2, arg2, sizeof(arg2)))
        {
            damage = StringToInt(arg2);
        }
            
        /**
                    * target_name - lưu trữ tên và xác định các target
                    * target_list - mảng để lưu trữ danh sách Client
                    * target_count - biến để lưu trữ số lượng Client
                    * tn_is_ml - lưu trữ liệu danh từ có phải được dịch hay không
                    */
        char target_name[MAX_TARGET_LENGTH];
        int target_list[MAXPLAYERS], target_count;
        bool tn_is_ml;
    
        if ((target_count = ProcessTargetString(
                arg1,
                client,
                target_list,
                MAXPLAYERS,
                COMMAND_FILTER_ALIVE, /* Chỉ cho phép người chơi còn sống */
                target_name,
                sizeof(target_name),
                tn_is_ml)) <= 0)
        {
            /* Chức năng này trả lời Admin bằng thông báo lỗi */
            ReplyToTargetError(client, target_count);
            return Plugin_Handled;
        }
    
        for (int i = 0; i < target_count; i++)
        {
            SlapPlayer(target_list[i], damage);
            LogAction(client, target_list[i], "\"%L\" slapped \"%L\" (damage %d)", client, target_list[i], damage);
        }
    
        if (tn_is_ml)
        {
            ShowActivity2(client, "[SM] ", "Slapped %t for %d damage!", target_name, damage);
        }
        else
        {
            ShowActivity2(client, "[SM] ", "Slapped %s for %d damage!", target_name, damage);
        }
    
        return Plugin_Handled;
    }

```

## Events ##
<hr>

**`Events`** là các thông báo **`notification`** thông tin được truyền giữa các đối tượng trong Server. Nhiều cũng được chuyển từ Server đến Client. Chúng được định nghĩa trong các **`file .res`** trong thư mục **`hl2/resource`** và các thư mục **`resource`** của các mod cụ thể. Để biết danh sách cơ bản, hãy xem [**`Source Game Events`**](https://wiki.alliedmods.net/Game_Events_(Source)).

Điều quan trọng cần lưu ý một vài khái niệm về các sự kiện:

 • Chúng hầu như luôn luôn cung cấp thông tin. Tức là, chặn **`player_death`** sẽ không ngăn một người chơi chết. Nó có thể chặn tin nhắn **`HUD`** hoặc **`console message`** hoặc thứ gì đó nhỏ.<br>
 • Họ hầu như luôn sử dụng các **`userids`** thay vì các chỉ mục client.<br>
 • Chỉ vì nó nằm trong một tệp tài nguyên không có nghĩa là nó đã từng được gọi hoặc hoạt động theo cách bạn mong đợi. Các mod nổi tiếng là không ghi lại đúng chức năng sự kiện của chúng.

 An example of finding when a player dies:

 ```java

    public void OnPluginStart()
    {
        HookEvent("player_death", Event_PlayerDeath);
    }
    
    public void Event_PlayerDeath(Event event, const char[] name, bool dontBroadcast)
    {
        int victim_id = event.GetInt("userid");
        int attacker_id = event.GetInt("attacker");
        
        int victim = GetClientOfUserId(victim_id);
        int attacker = GetClientOfUserId(attacker_id);
        
        /* CODE */
    }

 ```