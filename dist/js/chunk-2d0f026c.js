(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0f026c"],{"9ac1":function(v,_,p){"use strict";p.r(_);var o=function(){var v=this;v._self._c;return v._m(0)},e=[function(){var v=this,_=v._self._c;return _("div",[_("h1",[v._v("Changelog")]),_("h2",[v._v("0.8.0")]),_("p",[v._v("破坏性更新：大幅优化部分代码，小幅提升性能，主要是"),_("code",[v._v("render")]),v._v("类，删除无用逻辑、调整不合理的实现、提取重复代码；修改函数名称、函数功能等。")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复导出图片和svg时关联线的箭头消失的问题。")]),_("p",[v._v("2.修复调整容器大小后回到根节点的操作异常的问题。")]),_("p",[v._v("3.修复插入概要、上移、下移、一键整理布局的快捷键操作没有触发data_change事件的问题。")]),_("p",[v._v("4.修复存在水印时导出图片、svg、pdf时每个节点都会显示边框的问题。")]),_("p",[v._v("5.修复容器尺寸改变后没有水印没有重新绘制的问题。")]),_("p",[v._v("6.修复存在水印时小地图渲染非常慢的问题。")]),_("p",[v._v("7.修复协同插件当创建新节点时新节点未显示创建人头像的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.优化画布DOM结构，将节点、连线、关联线分层渲染。")]),_("p",[v._v("2.优化水印插件。")]),_("p",[v._v("3.setTheme、setThemeConfig、setLayout函数增加不触发重新渲染的参数。")]),_("p",[v._v("4.新增插入父节点的命令。")]),_("p",[v._v("5.新增仅删除当前节点的命令。")]),_("p",[v._v("6.插入概要时自动展开子节点。")]),_("p",[v._v("7.鼠标右键单击画布时清除当前激活节点。")]),_("p",[v._v("8.被收起的激活节点同步从激活节点列表里删除。")]),_("p",[v._v("9.粘贴带换行的文本支持控制是否按换行分割节点。")]),_("p",[v._v("10.小地图插件支持返回图片类型的小地图。")]),_("p",[v._v("11.指定时间内只允许添加一次历史记录，避免添加没有必要的中间状态。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.修改回到根节点的方法及文案。")]),_("p",[v._v("2.修复覆盖方式切换主题时第一次切换不生效的问题。")]),_("p",[v._v("3.右键菜单新增插入父节点和仅删除当前节点的功能。")]),_("p",[v._v("4.顶部工具栏支持根据窗口宽度自动收起到更多中。")]),_("p",[v._v("5.支持手动输入缩放倍数。")]),_("p",[v._v("6.完善界面英文翻译。")]),_("p",[v._v("7.小地图改为通过图片渲染。")])]),_("h2",[v._v("0.7.3-fix.2")]),_("p",[v._v("修复协同编辑的一些问题：")]),_("p",[v._v("1.插入同级节点时新节点位置不正确；")]),_("p",[v._v("2.在同级节点中移动位置没有触发更新；")]),_("p",[v._v("3.移动节点作为兄弟节点插入时位置不正确；")]),_("h2",[v._v("0.7.3-fix.1")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复一些情况下多选节点时的框选区域没有消失的问题。")]),_("p",[v._v("2.修复多选节点时在节点上松开鼠标时框选区域不会消失的问题。")]),_("p",[v._v("3.修复多次粘贴节点时由于节点uid重复造成的渲染异常问题。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.超链接输入框增加协议选择功能。")])]),_("h2",[v._v("0.7.3")]),_("p",[v._v("新增：1.新增协同编辑插件。")]),_("p",[v._v("Demo：1.修复公式侧边栏组件导致的侧边栏自动关闭问题。")]),_("h2",[v._v("0.7.2")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复多选节点时选区未包含节点边界时节点不会被选中的问题。")]),_("p",[v._v("2.修复节点文本不为字符串时报错的问题。")]),_("p",[v._v("3.修复非富文本模式下文本中存在<>&字符时再次编辑时部分文本会消失的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.支持插入数学公式。")]),_("p",[v._v("2.支持同时拖拽移动多个节点。")]),_("p",[v._v("3.支持同时复制、剪切多个节点。")]),_("p",[v._v("4.节点标签颜色改为根据标签内容生成，即同样的标签内容会生成相同的颜色。")]),_("p",[v._v("5.优化子节点的插入：1.同时对多个节点插入子节点时，不进入编辑状态；2.新插入的子节点自动进入激活状态。")]),_("p",[v._v("6.优化兄弟节点的插入：1.支持同时对多个节点插入兄弟节点；2.对根节点调用插入兄弟节点的命令时不再创建子节点。")]),_("p",[v._v("7.新增同时插入多个同级节点、多个子节点的命令。")]),_("p",[v._v("8.将节点唯一标识由id全部改为uid，主要影响关联线，之前版本的关联线可能无法正常显示。")]),_("p",[v._v("9.优化图标合并逻辑，支持扩展库内部分类下的图标。")]),_("p",[v._v("10.关联线：1.双击关联线进入关联线文本编辑模式；2.关联线文本为默认文本的话不保存；3.存在激活节点时点击关联线可直接激活关联线。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.修复复制知犀思维导图多个节点时无法粘贴的问题。")]),_("p",[v._v("2.新增公式编辑的侧边栏。")])]),_("h2",[v._v("0.7.1-fix.2")]),_("p",[v._v("修复：1.修复插件注册方法链式调用报错的问题。")]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.新增思维导图初次加载时适应画布大小的配置选项。")]),_("p",[v._v("2.新增自动生成dts声明文件的命令。")])]),_("h2",[v._v("0.7.1-fix.1")]),_("p",[v._v("修复：修复拖拽节点时没有排除被拖拽节点的下级节点的问题。")]),_("h2",[v._v("0.7.1")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复关联线端点改变后未保存的问题。")]),_("p",[v._v("2.修复画布左上角距浏览器窗口不为0时多选节点鼠标移动到边缘时画布滚动异常的问题。")]),_("p",[v._v("3.修复导入存在为标题为空的节点的xmind文件报错的问题。")]),_("p",[v._v("4.修复导出的xmind文件在最新版xmind软件上打开时提示已损坏的问题。")]),_("p",[v._v("5.修复导出带有贴纸的数据为xmind格式时贴纸无法显示的问题。")]),_("p",[v._v("6.修复没有注册select插件时节点右键事件报错的问题。")]),_("p",[v._v("7.修复注册插件的方法没有去重的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.重构节点拖拽逻辑：优化一些情况下的拖拽难问题、适配各种结构、拖拽时鼠标移动到画布边缘时画布自动移动。")]),_("p",[v._v("2.重构滚动条插件，优化使用体验。")]),_("p",[v._v("3.不完美的解决逻辑结构图、思维导图、目录组织图、组织结构图概要和节点的冲突问题（概要后面应该会重写或删除）。")]),_("p",[v._v("4.删除节点后激活相邻节点。")]),_("p",[v._v("5.节点数据data中以_开头的字段被认为是自定义字段。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.页面增加显示当前核心库版本号。")])]),_("h2",[v._v("0.7.0")]),_("p",[v._v("破坏性更新：删除了主题文件中节点激活样式的部分，不再支持设置节点的激活样式，激活效果改为统一的节点外边框样式，同时支持鼠标hover效果。")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复节点边框尺寸比较大的情况下的的渲染异常问题。")]),_("p",[v._v("2.修复切换主题时存在关联线的节点样式不会更新的问题。")]),_("p",[v._v("3.修复全选没有触发node_active事件的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.收起节点时，显示折叠的节点数量。")]),_("p",[v._v("2.支持关联线端点的位置跟随鼠标拖拽变化。")]),_("p",[v._v("3.新增滚动条插件。")]),_("p",[v._v("4.支持在url中通过fileURL查询参数打开指定的在线文件。")]),_("p",[v._v("5.鱼骨图支持设置节点margin。")]),_("p",[v._v("6.默认关闭双击复位画布。")]),_("p",[v._v("7.修改导出图片方法的参数,导出pdf时如果思维导图尺寸小于a4纸那么不旋转方向。")]),_("p",[v._v("8.提升导出的图片和pdf在高清屏的清晰度。")]),_("p",[v._v("9.插件新增销毁前生命周期函数，解决销毁思维导图时插件的一些副作用没有清除的问题。")]),_("p",[v._v("10.优化基础样式的设置，修改不影响大小的主题属性时不触发全量渲染。")]),_("p",[v._v("11.右键多选节点结束时禁止触发节点右键菜单事件，避免触发右键菜单显示。")]),_("p",[v._v("12.优化Select插件，如果多选节点没有变化，那么不触发激活激活事件。")]),_("p",[v._v("13.node_active事件抛出的激活节点列表不再直接引用内部激活列表。")]),_("p",[v._v("14.优化鼠标按下节点事件逻辑，在右键拖拽画布模式下支持右键按住根节点拖拽画布。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.不直接引用内部激活节点列表，优化性能。")]),_("p",[v._v("2.支持配置是否显示滚动条。")]),_("p",[v._v("3.删除侧边栏节点样式配置部分的激活节点配置。")])]),_("h2",[v._v("0.6.17")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复导入百度脑图导出的xmind文件报错的问题。")]),_("p",[v._v("2.修复mindMap.export方法代码错误。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.新增index.d.ts。")]),_("p",[v._v("2.支持配置是否开启双击复位思维导图。")]),_("p",[v._v("3.拦截富文本编辑时的粘贴操作，去掉格式，只允许粘贴纯文本。")])]),_("h2",[v._v("0.6.16")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.优化富文本测量元素的逻辑，删除样式的重复设置和节点的重复添加。")]),_("p",[v._v("2.优化导出图片逻辑，遍历节点转换图片的url时，如果已经是data:URL形式不重复处理。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.去除导出svg方法的第二个参数，改为通过实例化配置。")]),_("p",[v._v("2.导出图片不再使用外部库。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.修复单独编辑大纲时能给根节点添加兄弟节点的bug。")])]),_("h2",[v._v("0.6.15-fix.2")]),_("p",[v._v("修复：修复在Firefox浏览器中富文本节点无法显示的问题。")]),_("h2",[v._v("0.6.15-fix.1")]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.导出pdf支持根据图片大小分页导出。")]),_("p",[v._v("2.导出pdf支持根据长宽比自动调整方向。")]),_("p",[v._v("3.优化展开收起按钮的占位元素：1.没有子节点的节点不渲染该元素；2.根据是否存在子节点动态更新该元素。")]),_("p",[v._v("4.新增禁止鼠标滚轮缩放的配置。")]),_("p",[v._v("5.支持传递错误处理函数。")])]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复节点文本为空时显示异常问题。")]),_("p",[v._v("2.导出svg的图形的paddingX和paddingY改为单侧padding。")]),_("p",[v._v("3.修复画布距浏览器窗口左上角不为0时鼠标缩放时不以鼠标为中心的问题。")]),_("p",[v._v("4.修复节点边框会重合的问题。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.右下角支持跳转相关链接。")]),_("p",[v._v("2.调整小地图位置，解决被侧边按钮遮挡的问题。")]),_("p",[v._v("3.修复打开本地文件右上角的提示无法关闭的问题。")]),_("p",[v._v("4.单独编辑大纲不再和画布联动，优化大数据量下的编辑体验。")]),_("p",[v._v("5.侧边栏涉及图形的选项增加可视化效果。")])]),_("h2",[v._v("0.6.14")]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.去除创建隐藏输入框，通过navigator.clipboard实现复制粘贴；支持跨浏览器粘贴思维导图节点数据；支持自定义处理剪贴板中的文本数据。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.修复开启输入自动进入文本编辑模式和其他输入框冲突的问题。")]),_("p",[v._v("2.修复无法在节点图片弹窗里删除节点图片的问题。")]),_("p",[v._v("3.修复在节点样式侧边栏里无法去除节点的文本修饰线样式的问题。")]),_("p",[v._v("4.颜色选择器支持选择透明颜色。")]),_("p",[v._v("5.修复基础样式侧边栏打开状态下,导入思维导图数据后侧边栏数据未更新的问题。")]),_("p",[v._v("6.修复大纲修改一个节点的文本后再点击其他节点时不聚焦的问题。")]),_("p",[v._v("7.修复退出禅模式后左下角的节点和字数统计未更新的问题。")]),_("p",[v._v("8.支持从右键菜单删除节点的超链接、备注。")]),_("p",[v._v("9.支持粘贴知犀思维导图的节点数据。")])]),_("h2",[v._v("0.6.13")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复只读模式下鼠标中键按住节点无法拖动画布的问题。")]),_("p",[v._v("2.修复快速拖动节点几次后会概率性报错的问题。")]),_("p",[v._v("3.修复在移动端激活节点、展开收起时等操作时会拉起输入法的问题。")]),_("p",[v._v("4.修复主题配置中背景图片为none时会发起一个异常请求的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.移动端手势缩放优化: 按线性关系进行缩放、双指位移可以调整画布位置。")]),_("p",[v._v("2.去掉异步渲染节点的逻辑，提升创建新节点的速度。")]),_("p",[v._v("3.导出图片由html2canvas库改为使用dom-to-image-more库，解决导出富文本节点文字样式丢失的问题。")]),_("p",[v._v("4.非富文本输入框进入编辑状态时取消默认全选。")]),_("p",[v._v("5.存在一个激活节点时，支持按下中文、数字、英文按键时自动进入文本编辑模式。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.保存视图数据时增加防抖操作，优化性能。")]),_("p",[v._v("2.一些耗时的操作添加loading效果。")]),_("p",[v._v("3.完善右键菜单和富文本工具条的暗黑模式。")])]),_("h2",[v._v("0.6.12")]),_("p",[v._v("修复：")]),_("blockquote",[_("p",[v._v("1.修复当思维导图全部移出可视区域后小地图中的指示器也会移出小地图区域的问题。")]),_("p",[v._v("2.修复移动端双指缩放过于灵敏的问题。")]),_("p",[v._v("3.修复只读模式下按住节点无法拖动画布的问题。")]),_("p",[v._v("4.修复当思维导图距浏览器窗口左上角不为0时，小地图渲染不正确的问题。")]),_("p",[v._v("5.修复移动节点时新位置的提示块过大的问题。")]),_("p",[v._v("6.修复搜索不能替换为空字符的问题。")]),_("p",[v._v("7.修复富文本模式下，搜索替换后换行会丢失的问题。")]),_("p",[v._v("8.修复大纲里点击文字编辑时输入框焦点丢失的问题。")])]),_("p",[v._v("新增：")]),_("blockquote",[_("p",[v._v("1.节点移动结束事件（node_dragend）增加回调参数，可以获取到移动到节点的uid。")]),_("p",[v._v("2.支持通过配置指定内部一些元素添加到的位置。")]),_("p",[v._v("3.支持格式刷功能。")]),_("p",[v._v("4.曲线风格下，根节点的连接线样式支持和其他节点保持一致。")]),_("p",[v._v("5.搜索支持连续替换。")]),_("p",[v._v("6.节点图片新增删除按钮。")]),_("p",[v._v("7.支持按住鼠标中键拖动画布。")])]),_("p",[v._v("Demo：")]),_("blockquote",[_("p",[v._v("1.提供应用接管模式，方便对接自己的存储服务；支持运行时设置静态资源路径。")]),_("p",[v._v("2.重构大纲：1.不再使用节点自带的文本样式；2.支持全屏编辑大纲；3.大纲支持拖拽移动节点；4.大纲支持删除节点。")]),_("p",[v._v("3.修复导入数据场景下界面暗黑模式没有更新的问题。")])]),_("h2",[v._v("0.6.11-fix.1")]),_("p",[v._v("修复：1.修复节点文字为白色时编辑的时候看不见的问题。")]),_("h2",[v._v("0.6.11")]),_("p",[v._v("新增：1.优化小地图,去除小地图内的节点内容,优化性能。")]),_("p",[v._v("Demo：1.新增主题、主题列表新增tab区分。 2.节点图片上传支持输入网络图片地址。 3.节点图片上传支持输入网络图片。")]),_("h2",[v._v("0.6.10")]),_("p",[v._v("修复：1.修复搜索定位到某个节点后删除该节点，再次搜索时搜索结果未更新的问题。 2.修复调整图片大小的按钮在节点操作后没有更新的问题。 3.修复内部数据深拷贝位置不正确的问题。 4.修复富文本节点换行不生效的问题。 5.修复切换主题等场景时节点换行会丢失的问题。")]),_("p",[v._v("新增：1.搜索支持搜索空白字符和替换为空白字符。")]),_("p",[v._v("Demo：1.支持通过图标按钮调出搜索。 2.支持通过图标按钮切换暗黑模式。 3.优化搜索:鼠标不在搜索区域内不聚焦,解决鼠标不在搜索区域内无法删除输入的文字的问题。 4.调整添加节点图标的界面UI，新增系列节点图标。 5.新增贴纸列表。 6.修复在搜索框回车后输入框焦点丢失的问题。 7.支持点击节点内的图标显示一个图标快捷替换和删除悬浮面板。")]),_("h2",[v._v("0.6.9-fix.1")]),_("p",[v._v("修复：1.修复搜索进行一次单个替换后再全部替换不正确的问题。")]),_("p",[v._v("新增：1.不会再直接修改传入的data对象，内部会深拷贝一份。")]),_("h2",[v._v("0.6.9")]),_("p",[v._v("修复：1.修复给概要节点设置样式概要节点会消失的问题。2.修复自定义节点内容时，二次创建根实例时节点内容不渲染的问题。3.修复节点处于编辑中时添加新节点时新节点的焦点丢失问题。 2.修复连续按tab键无法连续创建子节点的问题。")]),_("p",[v._v("新增：1.导出svg时替换svg中存在的"),_("code",[v._v("&nbsp;")]),v._v("字符，避免导出的svg报错。 2.支持搜索和替换。")]),_("p",[v._v("Demo：1.切换主题时支持选择是否覆盖设置过的基础样式。")]),_("h2",[v._v("0.6.8")]),_("p",[v._v("修复：1.修改插入概要的快捷键为Ctrl+G，避免和保存快捷键冲突。 2.修复节点正在编辑时切换富文本编辑配置输入框出现异常的问题。")]),_("p",[v._v("新增：1.修改复制、剪切、粘贴逻辑，支持粘贴剪切板中的数据。")]),_("p",[v._v("Demo：1.修复基础样式-设置节点外边距未保存的问题。 2.支持根据主题自动切换为暗黑模式。")]),_("h2",[v._v("0.6.7")]),_("p",[v._v("修复：1.修复节点收起再展开后展开收起按钮占位元素丢失的问题。 2.修复只读模式下可以缩放图片的问题。")]),_("p",[v._v("新增：1.支持根据节点实例或节点uid定位到某个节点。 2.修改节点uid的创建方式，导出数据添加节点的uid。")]),_("p",[v._v("移除：1.移除节点过渡效果。")]),_("p",[v._v("Demo：1.添加网站首页。 2.修复大纲里创建新节点时节点样式丢失的问题。 3.修复大纲里编辑节点后按回车或Tab键后编辑文本丢失的问题。 4.优化大纲的节点定位，被收起的节点会自动展开。 5.侧边栏按钮支持收起。 6.优化小屏适配。")]),_("h2",[v._v("0.6.6")]),_("p",[v._v("新增：1.支持导出为Xmind新版文件。2.导入Xmind新版文件支持导入节点中的图片。 3.新增竖向时间轴结构。")]),_("p",[v._v("修复：1.TouchEvent插件不再派发click事件，解决移动端点击超链接会打开两个窗口的问题。 2.修复拖拽移动一个节点成为另一个节点的子节点时该节点的父节点指向未更新的问题。 3.修复二级节点拖拽成三级节点时节点边框样式未更新的问题。 4.修复向右生长的结构外其他结构鼠标移入展开收起按钮位置时不会触发按钮显示的问题。")]),_("p",[v._v("优化：1.优化触控板缩放画布时幅度过大的问题。2.刚创建的节点默认全选方便删除默认文本。")]),_("h2",[v._v("0.6.5-fix.1")]),_("p",[v._v("修复：1.修复在缩放情况下调整图片大小不正确的问题。")]),_("h2",[v._v("0.6.5")]),_("p",[v._v("修复：1.修复xmind文件导入报错的问题。 2.修复极少数情况下当节点文本的宽度为小数时显示发生换行的问题。")]),_("p",[v._v("新增：1.打包后的库支持获取内置常量、主题等数据。 2.支持配置鼠标滚轮方向对应的缩放行为。 3.节点图片支持拖拽调整大小。")]),_("h2",[v._v("0.6.4-fix.1")]),_("p",[v._v("新增：1.鼠标滚轮缩放时默认以鼠标当前位置为中心进行缩放，可以通过配置关闭该特性。")]),_("p",[v._v("修复：1.修复改变了画布大小后缩放中心点默认值不随之更新的问题。")]),_("h2",[v._v("0.6.4")]),_("p",[v._v("新增：1.默认以画布中心点进行缩放。 2.优化移动端双指缩放，以双指中心位置为中心点进行缩放。")]),_("h2",[v._v("0.6.3")]),_("p",[v._v("修复：1.修复概要节点会响应插入节点快捷键的问题。")]),_("p",[v._v("新增：1.支持自定义节点内容。")]),_("h2",[v._v("0.6.2")]),_("p",[v._v("修复：1.修复富文本模式下，新建节点不随主题变化而变化的问题。")]),_("h2",[v._v("0.6.1")]),_("p",[v._v("修复：1.修复将鼠标滚动改为移动画布行为后，使用触控板操作时移动灵敏度过高的问题。")]),_("h2",[v._v("0.6.0-fix.1")]),_("p",[v._v("修复：1.修复没有设置过背景样式的情况下销毁思维导图报错的问题。")]),_("h2",[v._v("0.6.0")]),_("p",[v._v("破坏性更新：调整了simple-mind-map源码的目录结构，主要影响：1.插件的引入路径需要修改。2.constant文件路径需要修改。")]),_("p",[v._v("新增：1.支持一键缩放至适应画布功能。 2.按住Ctrl键多选功能可通过配置按需开启。 3.支持设置为左键多选节点，右键拖动画布。 4.支持控制节点是否允许编辑。 5.新增销毁思维导图的方法。 6.新增触摸事件支持插件。")]),_("p",[v._v("修复：1.修复按住ctrl键多选节点时不会触发节点的click事件的问题。 2.修复清空一个节点后再输入文字时节点样式丢失的问题。")]),_("h2",[v._v("0.5.11")]),_("p",[v._v("新增：支持关联性文本编辑。")]),_("p",[v._v("优化：优化主题配置更新，改变不涉及节点大小的配置不触发节点重新计算。")]),_("h2",[v._v("0.5.10")]),_("p",[v._v("新增：使用LRU缓存算法优化节点复用逻辑。")]),_("h2",[v._v("0.5.10-fix.1")]),_("p",[v._v("修复：修复导入出错的问题。")]),_("h2",[v._v("0.5.10-fix.2")]),_("p",[v._v("修复：修复富文本模式下，切换主题、导入数据后没有触发数据改变的问题。")]),_("p",[v._v("新增：新增三种主题。")]),_("h2",[v._v("0.5.9")]),_("p",[v._v("修改：统一导出方法的格式，使用"),_("code",[v._v("FileReader")]),v._v("代替"),_("code",[v._v("URL.createObjectURL")]),v._v("转换"),_("code",[v._v("blob")]),v._v("数据。")]),_("h2",[v._v("0.5.8")]),_("p",[v._v("优化：1.节点位置没有变化不触发位置设置。 2.展开收起状态没有变化不触发按钮更新。")]),_("p",[v._v("新增：1.默认改为鼠标移上节点才显示展开收起按钮。 2.支持扩展节点可插入的图标列表。")]),_("h2",[v._v("0.5.7")]),_("p",[v._v("破坏性更新：富文本模式下导出png改为使用html2canvas转换整个svg，大幅提高导出速度，不过html2canvas存在一个bug，foreignObject元素中的dom节点内联的文字颜色无法识别，所以导出节点的文字颜色是固定的，不过相对于之前的导出基本不可用状态，目前至少能快速顺利的导出。")]),_("p",[v._v("优化：优化富文本节点编辑体验。")]),_("p",[v._v("新增：富文本模式下，导入数据、初始化数据、切换主题场景节点样式支持跟随主题变化。")]),_("h2",[v._v("0.5.6")]),_("p",[v._v("修复：1.修复短时间快速多次渲染时节点位置错乱的问题。 2.修复节点正在编辑中时拖动画布导致编辑框和节点分离的问题。")]),_("p",[v._v("新增：1.添加最大历史记录数限制。")]),_("h2",[v._v("0.5.5")]),_("p",[v._v("新增：1.支持配置导出为png、svg、pdf时的内边距。 2.支持配置节点文本编辑框、节点备注浮层元素的z-index。 3.支持点击画布外的区域结束节点编辑状态。")]),_("h2",[v._v("0.5.5-fix.1")]),_("p",[v._v("修复：1.修复节点在画布外编辑时编辑框也在画布外的问题。 2.修改结构后复位变换，防止存在缩放时切换结构后第一次拖动时会发生位置突变的问题。")]),_("p",[v._v("优化：1.节点多选时只要节点和选区存在交叉即认为被选中。")]),_("h2",[v._v("0.5.5-fix.2")]),_("p",[v._v("修复：1.修复小地图报错。")]),_("h2",[v._v("0.5.4")]),_("p",[v._v("新增：1.添加新主题。 2.新增时间轴和鱼骨结构。")]),_("p",[v._v("修复：1.修复节点右键和画布右键的冲突问题。 2.修复组织结构图、目录组织图等节点拖拽时存在线段未隐藏的bug。")]),_("p",[v._v("优化：1.优化组织结构图布局。2.优化目录组织图布局。")]),_("h2",[v._v("0.5.4-fix.1")]),_("p",[v._v("优化：1.优化鱼骨图布局。")]),_("h2",[v._v("0.5.3")]),_("p",[v._v("修复：1.修复富文本模式下，如果选择了多个节点时设置文本样式，会将所有多选节点的文本改成最后一个多选节点的文本的问题。")]),_("p",[v._v("新增：1.支持设置初始中心节点的位置。")]),_("h3",[v._v("0.5.3-fix.1")]),_("p",[v._v("修复：1.修复设置初始中心节点的位置不生效的问题。")]),_("h3",[v._v("0.5.3-fix.2")]),_("p",[v._v("修复：1.修复导出为图片时，节点中的图片显示不出来的问题。")]),_("h2",[v._v("0.5.2")]),_("p",[v._v("修复：1.导出的"),_("code",[v._v("json")]),v._v("数据中去除"),_("code",[v._v("uid")]),v._v("；2.重新渲染时清空节点缓存池。")]),_("h2",[v._v("0.5.1")]),_("p",[v._v("优化：1.只有当鼠标在画布内才响应快捷键事件。")]),_("p",[v._v("修复：1.修复快速操作时节点位置不正确的问题。")]),_("h2",[v._v("0.5.0")]),_("p",[v._v("这个版本主要是代码层面的改动和优化，核心是为了提升渲染性能，减少卡顿问题。")]),_("p",[v._v("新增：1.支持自定义展开收起节点图标和颜色；")]),_("p",[v._v("优化：1.优化渲染逻辑，设置主题、前进回退等操作不再全量渲染；")]),_("pre",[_("code",[v._v(" 2.优化节点拖拽逻辑，修复无法拖动到两个节点之间的问题；\n\n 3.收起全部节点操作增加回到中心点的逻辑；\n\n 4.修复短时间多次触发渲染造成节点乱飞和错乱的问题；\n\n 5.优化节点编辑的体验；\n")])]),_("p",[v._v("修复：1.修复setData方法不触发历史记录的问题；")]),_("p",[v._v("修改：从0.5.0版本开始，考虑性能问题，节点激活状态只能修改形状相关的样式：")]),_("pre",{staticClass:"hljs"},[_("code",[v._v("[\n  "),_("span",{staticClass:"hljs-string"},[v._v("'fillColor'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderColor'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderWidth'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderDasharray'")]),v._v(",\n  "),_("span",{staticClass:"hljs-string"},[v._v("'borderRadius'")]),v._v("\n]\n")])]),_("h2",[v._v("0.4.7")]),_("p",[v._v("优化：1.富文本编辑时初始聚焦时不再默认全选；2.富文本编辑时使用节点填充色作为背景色，避免节点颜色为白色时看不见。 3.节点激活状态切换不再触发历史记录。 4.短时间多次触发历史记录，只会添加最后一次的数据。 5.优化历史记录添加，当有回退时，再次添加新记录时删除当前指针后面的历史数据。")]),_("p",[v._v("新增：1.支持导入和导出Markdown格式文件。 2.支持配置插入节点时的初始文字。 3.扩展插入节点和删除节点的命令，支持指定节点。")]),_("h2",[v._v("0.4.6")]),_("p",[v._v("新增：1.关联线支持调整控制点。")]),_("p",[v._v("优化：1.添加历史数据时过滤和上一次相比没有改变的数据。")]),_("p",[v._v("修复：1.修复节点编辑时方向键和方向键导航功能的冲突问题。 2.修复拖拽移动节点时节点id的丢失问题，这会导致关联线丢失。")]),_("h2",[v._v("0.4.5")]),_("p",[v._v("新增：1.支持关联线。 2.按住根节点也可以拖动画布。3.按住ctrl键可以调整多选节点。")]),_("h2",[v._v("0.4.4")]),_("p",[v._v("新增：支持响应鼠标的横向滚动。")]),_("h2",[v._v("0.4.3")]),_("p",[v._v("修复：前进回退后没有触发"),_("code",[v._v("data_change")]),v._v("事件的问题。")]),_("p",[v._v("新增：支持自定义鼠标滚轮事件；鼠标滚轮调整为支持缩放视图和上下移动视图。")]),_("h2",[v._v("0.4.2")]),_("p",[v._v("新增："),_("code",[v._v("Node")]),v._v("类的"),_("code",[v._v("setText")]),v._v("方法增加第二个参数，以支持设置富文本内容。")]),_("h2",[v._v("0.4.1")]),_("p",[v._v("新增：1.新增抛出节点鼠标移入和移除事件；2.节点富文本支持设置背景颜色；3.节点富文本支持清除样式。")]),_("p",[v._v("修复：1.Mac系统触控板缩放相反的问题；2.设备window.devicePixelRatio不为1时，当存在富文本节点时导出的图片中富文本节点尺寸会变大的问题。")]),_("h2",[v._v("0.4.0")]),_("p",[v._v("新增：节点支持富文本编辑。")]),_("h2",[v._v("0.3.4")]),_("p",[v._v("新增：节点文本增加自动换行功能。")]),_("p",[v._v("修复：1.修复批量删除的节点中如果存在根节点会出现删除异常的问题。2.修复底边风格的情况下，节点高度过高会和其他节点重叠的问题。")]),_("h2",[v._v("0.3.3")]),_("p",[v._v("修复：根节点文字无法换行的问题。")]),_("h2",[v._v("0.3.2")]),_("p",[v._v("修复：1.修复二级节点拖拽到其他节点或其他节点拖拽到二级节点时节点样式没有更新的问题；2.修复当思维导图实际内容大于屏幕宽高时，导出的时候超出的部分没有绘制水印的问题。")]),_("h2",[v._v("0.3.1")]),_("p",[v._v("修复：1.删除背景图片不生效的问题；2.节点拖拽到根节点时连接线跑到根节点上方的问题。")]),_("p",[v._v("新增：背景图片展示增加位置和大小设置。导出的图片也同步支持该设置。")]),_("h2",[v._v("0.3.0")]),_("p",[v._v("升级为插件化架构，将一些非核心功能抽离出来作为插件，按需注册，减小整体体积。")]),_("h2",[v._v("0.2.24")]),_("p",[v._v("新增：节点自由拖拽改为可配置，默认为"),_("code",[v._v("false")]),v._v("不开启；支持添加水印。")]),_("h2",[v._v("0.2.23")]),_("p",[v._v("新增：支持注册新主题。")]),_("h2",[v._v("0.2.22")]),_("p",[v._v("优化：取消内置"),_("code",[v._v("simple-mind-map")]),v._v("包的主题和结构图片，改为由使用者自行维护，原有图片可在"),_("code",[v._v("web/assets/img/")]),v._v("目录找到。")]),_("h2",[v._v("0.2.21")]),_("p",[v._v("新增：支持节点横线风格。")]),_("h2",[v._v("0.2.20")]),_("p",[v._v("修复：画布距窗口左上角不为0时节点拖拽出现偏移的问题。")]),_("h2",[v._v("0.2.19")]),_("p",[v._v("修复：没有激活节点时随便按什么键都会触发自动聚焦的问题。")]),_("h2",[v._v("0.2.18")]),_("p",[v._v("优化：键盘导航寻找焦点的算法，支持简单算法、区域算法、阴影算法。")]),_("h2",[v._v("0.2.17")]),_("p",[v._v("新增：键盘导航，即通过方向键来切换激活的节点；支持在大纲直接编辑节点文本内容。")]),_("h2",[v._v("0.2.16")]),_("p",[v._v("优化：小地图、拖拽性能。")]),_("h2",[v._v("0.2.15")]),_("p",[v._v("优化：本地文件编辑。")]),_("p",[v._v("新增：支持双击节点内图片进行大图预览。")]),_("h2",[v._v("0.2.14")]),_("p",[v._v("优化：插入子节点时自动展开。")]),_("p",[v._v("修复：小地图关闭时报错的问题。")]),_("h2",[v._v("0.2.13")]),_("p",[v._v("修复：子节点收起状态复制时丢失的问题。")]),_("h2",[v._v("0.2.11")]),_("p",[v._v("修复：修复子节点收起状态复制时丢失的问题。")]),_("p",[v._v("新增：支持小地图。")]),_("h2",[v._v("0.2.10")]),_("p",[v._v("优化：手动创建节点时立即聚焦。")]),_("p",[v._v("修复：连线样式深度更新问题。")]),_("p",[v._v("新增：逻辑结构图、思维导图新增直线连接风格、直连风格。")]),_("h2",[v._v("0.2.9")]),_("p",[v._v("新增：支持新建、打开、保存到电脑本地文件。")]),_("h2",[v._v("0.2.8")]),_("p",[v._v("修复：xmind8版本文件导入失败的问题。")]),_("p",[v._v("新增：支持展开到指定层级。")]),_("h2",[v._v("0.2.7")]),_("p",[v._v("修复：根节点添加多个节点爆栈的问题。")]),_("p",[v._v("新增：支持导入.xmind文件。")]),_("h2",[v._v("0.2.6")]),_("p",[v._v("新增：导出svg增加title标签。")]),_("h2",[v._v("0.2.5")]),_("p",[v._v("修复：节点展开收起的bug。")]),_("p",[v._v("新增：节点支持自定义线条样式。")]),_("h2",[v._v("0.2.4")]),_("p",[v._v("新增：节点支持多种形状。")]),_("h2",[v._v("0.2.3")]),_("p",[v._v("修复：编辑节点文本时快捷键冲突的问题；右键菜单快捷键提示错误；右键菜单快捷键提示。")]),_("h2",[v._v("0.2.2")]),_("p",[v._v("修复：输入字符串'/'和快捷键'/'冲突问题。")]),_("h2",[v._v("0.2.1")]),_("p",[v._v("新增：支持导出为pdf。")]),_("h2",[v._v("0.2.0")]),_("p",[v._v("新增：经典4主题；支持添加概要；支持自由拖拽；上移节点、下移节点、复制节点、剪切节点、粘贴节点、一键整理布快捷键；库打包；Ctrl+左键多选。")]),_("h2",[v._v("0.1.18")]),_("p",[v._v("修复：节点图标不能删除的问题；工具按钮置灰仍然可以点击的问题。")]),_("h2",[v._v("0.1.17")]),_("p",[v._v("新增：增加只读模式。")]),_("h2",[v._v("0.1.16")]),_("p",[v._v("新增：节点备注支持markdown及富文本。")]),_("p",[v._v("修复：不能选中文字的问题；节点标注在节点激活后无法隐藏问题；超链接、备注、标签等文字编辑时返回键和回车键与思维导图快捷键冲突的问题。")]),_("h2",[v._v("0.1.15")]),_("p",[v._v("新增：状态数据支持保存激活状态、视图状态（拖动位置、缩放值）；支持节点拖拽。")]),_("h2",[v._v("0.1.14")]),_("p",[v._v("修复：存在激活节点时设置主题存在的问题。")]),_("h2",[v._v("0.1.13")]),_("p",[v._v("新增：快捷键功能；新增导出为json。")]),_("p",[v._v("优化：一些细节。")]),_("h2",[v._v("0.1.12")]),_("p",[v._v("新增：本地存储；右键菜单功能等。")]),_("h2",[v._v("0.1.0")]),_("p",[v._v("完成基本功能。")])])}],h={},t=h,i=p("2877"),c=Object(i["a"])(t,o,e,!1,null,null,null);_["default"]=c.exports}}]);