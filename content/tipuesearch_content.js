var tipuesearch = {"pages": [{'title': '關於', 'text': '本學期的電腦輔助設計實習，要求每一位學員根據本硬件模板的格式建立個人的作業與網頁。 \n \n 40923233 \n 網站電子： https://github.com/40923233/cad2021_hw \n 網站鏈接： https  ://40923233.github.io/cad2021_hw/content/index.html \n 其他與作者或作業相關資料說明或介紹 \n', 'tags': '', 'url': '關於.html'}, {'title': 'Task', 'text': '', 'tags': '', 'url': 'Task.html'}, {'title': 'hwpages', 'text': '40723126\t 40723126 \n40723135\t 40723135 \n40723217\t 40723217 \n40732331\t 40732331 \n40823114\t 40823114 \n40823115\t 40823115 \n40823117\t pyc40823117 \n40823119\t 4082311 9 \n40823122\t 40823122 \n40823127\t 40823127 \n40823146\t 40823146 \n40823148\t 40823148 \n40823215\t 40823215 \n40871106\t 40871106 \n40923201\t 40923201 \n40923203\t youshin40923203 \n40923204\t 40923204 \n40923205\t 40923205 \n40923206\t 40923206-1 \n40923207\t 40923207 \n40923208\t nfu40923208 \n40923209\t nfu40923209 \n40923210\t 40923210 \n40923211\t a40923211 \n40923212\t 40923212 \n40923213\t 40923213 \n40923214\t 40923214 \n40923216\t 40923216 \n40923217\t 40923217 \n40923218\t 40923218 \n40923219\t nfu40923219 \n40923220\t 40923220 \n40923221\t 40923221 \n40923223\t 40923223 \n40923224\t s40923224 \n40923225\t 40923225 \n40923226\t 40923226 \n40923227\t 40923227 \n40923228\t 40923228 \n40923229\t 40923229 \n40923230\t 40923230 \n40923231\t 40923231 \n40923232\t 40923232 \n40923233\t 40923233 \n40923234\t 40923234 \n40923235\t 40923235 \n40923236\t 40923236 \n40923237\t 40923237 \n40923238\t 40923238 \n40923239\t 40923239 \n40923240\t 40923240 \n40923241\t 40923241 \n40923242\t 40923242 \n40923243\t 40923243 \n40923244\t 40923244 \n40923245\t 40923245-1 \n40923246\t 40923246 \n40923247\t 40923247 \n40923248\t 40923248 \n40923249\t 40923249-1 \n40923250\t 40923250 \n40923251\t 40923251 \n40923252\t 40923252 \n40923253\t 40923253 \n40971220\t 40971220 \n40971227\t 40971227 \n', 'tags': '', 'url': 'hwpages.html'}, {'title': 'HW1', 'text': 'HW1 佔學生績效 25% \n HW1必須在2021.11.10 22:00之前完成。 \n HW1具體項目成果回報區 將於2021.09.23開啟，於 2021.11.10 22:00關閉。 \n 作業一：meArm機器人訂貨與機電運動模擬場景製作 \n Step1 ：下載 meARM.7z 這個包含未完成組立的meArm Robot場景與雷射切割粒子組立手冊。 \n meArm_75-0040_v1.pdf 則是另外一本組立參考手冊。 \n Step2 ：從課程網頁中的 Compile CoppeliaSim頁面 ，下載 coppeliaSim 4.1.0官方版與MSYS2編譯版.7z （檔案大小412 MB，解開壓縮後1GB）可攜套件。 \n Step3 ：在HW1中，要求每一位展開程序亂數分配（兩班實際亂數分配結果以上的課程）所使用的兩套參數式CAD套件，從軟體發展緣開始進行介紹、經過教育版軟體套件檔案的取得、下載安裝以及配置使用。 可知Step1中的零件尺寸，逐一完成我的手臂機器人各零件繪製與組立。 鋸縫 匯入 CoppeliaSim 進行整體配置後，以 UI介面 中的滑塊控制meArm Robot各軸的旋轉作動。 \n 2b CAD套件分配結果： https  ://mde.tw/cad2021/downloads/online/2b_hw1_cad.txt \n 附件： \n 1. CAD套件分配表： \n sw：Solidworks，inv：Inventor，nx：NX12，ons：Onshape，slvs：Solvespace \n 2a 套裝亂數分配結果 \n 2b 套裝亂數分配結果 \n 2.在兩套CAD完成零件繪圖並轉入CoppeliaSim後，為了建立動態模型必須利用 形狀編輯模式 轉為 乾淨模型 ，並與實際轉入的STL格式零件外形結合應用後建立模擬場景 （場景）。 \n 3. meARM機器人 動態模擬場景 的建構，可參考 0 ， 1 ， 2 ， 3 ， 4 ， 5 ， 6 ， 7 ，也可參考 Uarm機器人模型 與相關 影片 。 \n 4. CoppeliaSim設計動態模擬 說明頁面 。 \n 5. 網際Lua 程序執行。 \n 6.  meArm.slvs  ,  meArm_in_solvespace.slvs \n 7. UI介面程序參考： \n 函數 closeEventHandler(h) \n    sim.addLog(sim.verbosity_scriptinfos,\'窗口\'..h..\'正在關閉......\') \n    simUI.hide(h) \n結尾 \n \n函數joint1_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta1 設置為\'..newVal) \n    sim.setJointTargetPosition(joint1, newVal*deg) \n結尾 \n \n函數joint2_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta2 設置為\'..newVal) \n    sim.setJointTargetPosition(joint2, newVal*deg) \n結尾 \n \n函數joint3_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta3 設置為\'..newVal) \n    sim.setJointTargetPosition(joint3, newVal*deg) \n結尾 \n \n函數joint16_rotate(ui,id,newVal) \n    simUI.setLabelText(ui,3000,\'theta16 設置為\'..newVal) \n    sim.setJointTargetPosition(joint16, newVal*deg) \n    sim.setJointTargetPosition(joint20, -newVal*deg) \n結尾 \n \n函數 sysCall_init() \n    -- 在這裡做一些初始化 \n    關節 1 = sim.getObjectHandle(\'motor1\') \n    Joint2 = sim.getObjectHandle(\'motor2\') \n    Joint3 = sim.getObjectHandle(\'motor3\') \n    Joint16 = sim.getObjectHandle(\'motor16\') \n    Joint20 = sim.getObjectHandle(\'motor20\') \n    我 = 0 \n    度 = math.pi/180 \n    打印（一） \n    xml = [[ \n<ui closeable="true" on-close="closeEventHandler" resizable="true"> \n    " <label text="這是 CustomUI 插件的演示。瀏覽下面的選項卡以探索可以使用該插件創建的所有小部件。 wordwrap="true" /> \n    <標籤> \n        <tab title="數字">a \n            <label text="滑塊可以水平或垂直定向，並且具有可以設置（在 XML 中）的可選屬性，例如最小值和最大值。"  wordwrap="true" /> \n            <label text="" id="3000" wordwrap="true" /> \n            <label text="theta1" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="0" maximum="360" on-change="joint1_rotate" /> \n            <label text="theta2" /> <hslider tick-position="above" tick-interval="1"  \n            最小值="-90" 最大值="65" on-change="joint2_rotate" /> \n            <label text="theta3" /> <hslider tick-position="above" tick-interval="1"  \n            最小值="-90" 最大值="185" on-change="joint3_rotate" /> \n            <label text="theta16" /> <hslider tick-position="above" tick-interval="1"  \n            minimum="0" maximum="15" on-change="joint16_rotate" /> \n        </tab> \n    </標籤> \n</ui> \n]] \n    ui=simUI.create(xml) \n     \n結尾 \n \n （來自： 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOOT - 計算模型和實驗結果.pdf ） \n \n', 'tags': '', 'url': 'HW1.html'}, {'title': 'CAD1繪圖', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件，包括 Solidworks、Inventor、NX、Onshape 與 Solvespace。 \n CAD1緣起說明與介紹 \n 請不要直接從找到的 CAD1 套件說明貼上，折疊應該完整的各種參考資料後，重打字彙。 \n', 'tags': '', 'url': 'CAD1繪圖.html'}, {'title': 'CAD1 安裝配置', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件，包括 Solidworks、Inventor、NX、Onshape 與 Solvespace。 \n CAD1套件下載安裝與配置 \n CAD1 下載安裝與配置流程嵌入影片： 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020 下載安裝與配置 」且加上 語音說明 與 字幕。 \n 如果使用Solidworks 2017版，則將SW2020換成SW2017，其他套件INV2020代表AutoDesk Inventor 2020版，還有Onshape和Solvespace等套件名稱。 \n 由於安裝配置 Solidworks 時必須使用 nfu 的 vpn, 因此各學員必須按照 說明 , 完成本學期的 vpn 使用申請. \n Solidworks 分別提供 2017 與 2020 版本: \n SW2017 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n SW2020 Professional 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 版本: \n NX12 安裝光碟下載  (必須先登入 @gm 帳號後才能下載) \n NX12 可攜版本下載 \xa0(必須先登入 @gm 帳號後才能下載) \n Inventor: \n 請在校園網路, 使用 nfu vpn 或設定系上代理主機, 就可以從  https://2019wcm.blogspot.com/2019/07/autodesk-inventor-professional.html  嘗試下載 autodesk.iso 後安裝 Inventor Professional 版本. \n Onshape: \n 至  https://www.onshape.com/en/  申請帳號後使用. \n Solvespace: \n 至  https://solvespace.com  下載或從  https://github.com/solvespace/solvespace  下載原始碼, 以可攜程式系統自行編譯後使用. \n', 'tags': '', 'url': 'CAD1 安裝配置.html'}, {'title': 'CAD1 操作流程', 'text': 'CAD1 指各學員所分配到的第一套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD1 零組件繪圖操作流程影片 (Youtube) \n CAD1 零組件繪圖教學影片 (Wink) \n CAD1 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD1 操作流程.html'}, {'title': 'CAD2 繪圖', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 緣起說明與介紹 \n 請不要直接從找到的 CAD2 套件說明複製貼上, 而是應該要看完各種參考資料後, 重新打字彙整. \n', 'tags': '', 'url': 'CAD2 繪圖.html'}, {'title': 'CAD2 安裝配置', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 套件下載安裝與配置 \n CAD2 套件下載安裝與配置影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  套件下載安裝與配置影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 安裝配置.html'}, {'title': 'CAD2 操作流程', 'text': 'CAD2 指各學員所分配到的第二套參數式 CAD 套件, 其中包括 Solidworks, Inventor, NX, Onshape 與 Solvespace. \n CAD2 零組件繪圖操作流程影片 (Youtube) \n CAD2 零組件繪圖教學影片 (Wink) \n CAD2 零組件繪圖教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零組件繪圖教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': 'CAD2 操作流程.html'}, {'title': '運動場景', 'text': 'CAD1: \n CAD1 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD1 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD1 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n CAD2: \n CAD2 零件轉出後轉入 CoppeliaSim 操作影片 (Youtube) \n CAD2 零件轉入 CoppeliaSim 教學影片 (Wink) \n CAD2 轉入 Coppeliasim 教學影片 embedded 影片: 標題必須為「 NFU - MDE - cad2021 - 學號 - SW2020  零件轉入 CoppeliaSim 教學影片」且加上 語音說明 與 字幕. \n 若使用 Solidworks 2017 版, 則將 SW2020 換為 SW2017, 其他套件 INV2020 代表 AutoDesk Inventor 2020 版, 還有 Onshape 與 Solvespace 等套件名稱. \n', 'tags': '', 'url': '運動場景.html'}, {'title': 'HW1-1', 'text': 'HW1-1 佔學期成績 15% \n HW1-1 必須在 2021.12.01 22:00 之前完成. \n HW1-1 具體項目成果回報區 將於 2021.11.18 開啟, 於  2021.12.01 22:00 關閉. \n 作業 1-1: Mirobot 機械手臂場景組合 \n 說明: meArm Robot 有四個自由度, 請根據 HW1 的零組件繪製組立與 CoppeliaSim 運動場景模擬, 延伸至  Task1-1  中六個自由度的 Mirobot 機械手臂. \n mirobot_part1_to_part5.7z  為取自 \xa0 https://github.com/wlkata/Mirobot-STL  的參考零件. 請利用場景中 Mirobot STL 零件, 組合為可以透過  UI 介面 中的 slider 控制各軸作動旋轉的運動模型. \n 請根據  Task1-1  中的說明, 完成各項指定任務. \n', 'tags': '', 'url': 'HW1-1.html'}, {'title': 'HW2', 'text': 'HW2 佔學期成績 20% \n HW2 必須在 2021.12.22 22:00 之前完成. \n HW2 具體項目成果回報區 將於 2021.12.09 開啟, 於  2021.12.22 22:00 關閉. \n meArm 逆向運動學與網際參數式 CAD API 結合應用. \n 請將  https://github.com/mdecourse/meArm  中的 meArm Robot 逆向運動學程式, 改為 Lua 與 Python 程式, 使能套用至 HW1 所完成的 CoppeliaSim meArm 運動模擬場景. 並分別採 Lua, Legacy remote API 及 Bluezero remote API 逆向運動的方式進行控制. \n 請利用  Task2  中的 Solidworks, Inventor 與 NX API 程式控制 meArm Robot 零組件尺寸, 說明並討論如何透過網際程式控制 meArm Robot 的零件尺寸, 並結合上述逆向運動學程式庫, 使得自動化機電產品開發流程更容易滿足客製化需求. \n 參考: \n 2016_ADDITIVE MANUFACTURING PROCESSES FOR FABRICATING A MINI ROBOT - COMPUTATIONAL MODELS AND EXPERIMENTAL RESULTS.pdf \n Robot Manipulator Control with Inverse Kinematics PD-Pseudoinverse Jacobian and Forward Kinematics Denavit Hartenber.pdf \n KINEMATIC ANALYSIS FOR ROBOT ARM.pdf \n https://codebender.cc/user/MeArm \n https://github.com/mdecourse/meArmPi \n /downloads/MeArmPiTechnicalOverviewV0-3DRAFT.pdf \n https://github.com/mdecourse/me-arm-ik \n https://github.com/mdecourse/mearm_model \n https://courses.ece.cornell.edu/ece5990/ECE5725_Fall2016_Projects/pas324_ml634/index.html \n https://github.com/mdecourse/InefficientSkittleSorter \n https://mearm.com \n', 'tags': '', 'url': 'HW2.html'}, {'title': 'HW3', 'text': 'HW3 為選項作業. \n HW3 具體項目成果回報區 將於 2021.12.09 開啟, 於  2022.01.05 22:00 關閉 \n https://mde.tw/cad2021/content/Task3.html \xa0 \n https://mde.tw/cad2021/content/Task4.html \n https://mde.tw/cad2021/content/Task5.html \n https://mde.tw/cad2021/content/Task6.html \n https://mde.tw/cad2021/content/Task7.html \n 請從上列 Tasks 中自行選擇項目內容完成 HW3. \n', 'tags': '', 'url': 'HW3.html'}, {'title': 'Final Project', 'text': 'Final Project 佔學期成績 40% \n 2a 與 2b 必須在 2022.01.06 上課之前完成 Final Project \n 最終項目具體項目成果回報區 將於2021.12.09開啟，於 2022.01.05 22:00 關閉 \n 彈性製造系統 佈景設計與製作 \n 請從 https://github.com/mdecourse/scenes 與 https://github.com/mdecourse/models 中選擇場景或模型， 登 配合 cad20211.pdf （入@gm後下載）教材中的內容，自選製作與組立產品，組合成一個組製造系統系統場景。 \n 彈性製造系統內容說明 \n 例子： \n \n', 'tags': '', 'url': 'Final Project.html'}]};