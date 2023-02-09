{
    "规则名": "无名小站",
    "规则作者": "",
    "请求头参数": "电脑",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "0",
    "是否开启获取首页数据": "1",
    "首页推荐链接": "https://www.blssv.com",
    "首页列表数组规则": "body&&.index_vod",
    "首页片单列表数组规则": ".vod_item",
    "首页片单是否Jsoup写法": "1",
    //"首页片单链接": "a&&href[替换:/voddetail/=>||/=>]",
    "分类起始页码": "1",
    "分类链接": "https://www.blssv.com/vodshow-{cateId}/area/{area}/by/{by}/class/{class}/page/{catePg}/year/{year}/",
    "分类名称": "电影&电视剧&综艺&动漫",
    "分类名称替换词": "1&2&3&4",
    //"筛选数据": {},
    "筛选数据": "ext",
    //{cateId}
    "筛选子分类名称": "",
    "筛选子分类替换词": "",
    //{class}
    "筛选类型名称": "",
    "筛选类型替换词": "*",
    //{area}
    "筛选地区名称": "",
    "筛选地区替换词": "*",
    //{year}
    "筛选年份名称": "",
    "筛选年份替换词": "*",
    //{lang}
    "筛选语言名称": "",
    "筛选语言替换词": "*",
    //{by}
    "筛选排序名称": "时间&人气&评分",
    "筛选排序替换词": "time&hits&score",
    "分类截取模式": "1",
    "分类列表数组规则": ".list&&li",
    "分类片单是否Jsoup写法": "1",
    "分类片单标题": ".star-up-name||.vod_title&&Text",
    "分类片单链接": "a&&href[替换:/voddetail/=>||/=>]",
    "分类片单图片": ".lazy||.lazyload&&data-original||data-src",
    "分类片单副标题": ".vod_remarks&&Text",
    "分类片单链接加前缀": "https://www.blssv.com/vodplay/",
    "分类片单链接加后缀": "-1-1/",
    "搜索请求头参数": "User-Agent$电脑",
    "搜索链接": "https://www.blssv.com/vodsearch/-------------/?wd={wd}",
    "POST请求数据": "searchword={wd}",
    "搜索截取模式": "1",
    "搜索列表数组规则": ".list&&li",
    "搜索片单是否Jsoup写法": "1",
    "搜索片单图片": ".lazy&&data-original",
    "搜索片单标题": ".star-up-name&&Text",
    "搜索片单链接": "a&&href[替换:/voddetail/=>||/=>]",
    "搜索片单副标题": ".vod_remarks&&Text",
    "搜索片单链接加前缀": "https://www.blssv.com/vodplay/",
    "搜索片单链接加后缀": "-1-1/",
    "链接是否直接播放": "0",
    "直接播放链接加前缀": "",
    "直接播放链接加后缀": "",
    "直接播放直链视频请求头": "",
    "详情是否Jsoup写法": "1",
    "类型详情": "",
    "年代详情": "",
    "地区详情": ".info_text&&.inline_item,1&&Text",
    "演员详情": ".info_text&&.inline_item,2&&Text",
    "简介详情": ".info_text&&p&&Text",
    "线路列表数组规则": ".vod_play_list&&.mdui-panel-item-title",
    "线路标题": "Text",
    "播放列表数组规则": ".vod_play_list&&.mdui-panel-item-body",
    "选集列表数组规则": ".mdui-btn-raised",
    "选集标题链接是否Jsoup写法": "1",
    "选集标题": "a&&Text",
    "选集链接": "a&&href",
    "是否反转选集序列": "0",
    "选集链接加前缀": "https://www.blssv.com",
    "选集链接加后缀": "",
    "分析MacPlayer": "0",
    "是否开启手动嗅探": "1",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv#video/tos",
    "手动嗅探视频链接过滤词": ".html#=http"
}