/**
 * 自定义事件列表
 */
var EventList = [
    // dom事件
    'click',
    'contextmenu',
    'dblclick',
    'keydown',
    'keyup',
    'mousedown',
    'mousemove',
    'mouseup',
    'mousewheel',
    'resize',
    'dragover',
    'drop',

    // editor事件
    'setTheme', // 设置编辑器主题
    'setScene', // 设置编辑器场景
    'addObject', // 添加物体
    'moveObject', // 移动物体
    'nameObject', // 重命名物体
    'removeObject', // 删除物体
    'addGeometry', // 添加几何体事件
    'setGeometryName', // 设置几何体名称事件
    'addMaterial', // 添加材质事件
    'setMaterialName', // 设置材质名称
    'addTexture', // 添加纹理
    'addHelper', // 添加帮助事件
    'removeHelper', // 移除脚本
    'addScript', // 添加脚本
    'removeScript', // 移除脚本
    'select', // 选中事件
    'clear', // 清空场景
    'load', // 加载场景
    'save', // 保存场景

    // signal事件
    'editScript', // 编辑脚本事件

    'startPlayer', // 启动播放器事件
    'stopPlayer', // 停止播放器事件

    'enterVR', // 进入VR事件
    'enteredVR', // 已经进入VR事件
    'exitedVR', // 已经退出VR事件

    'editorCleared', // 编辑器已经清空事件

    'savingStarted', // 开始保存事件
    'savingFinished', // 保存完成事件

    'themeChanged', // 改变主题事件

    'transformModeChanged', // 平移旋转缩放模式改变事件
    'snapChanged', // 对齐单元格事件
    'spaceChanged', // 空间坐标系改变事件
    'rendererChanged', // 渲染模式改变事件

    'sceneBackgroundChanged', // 场景背景改变事件
    'sceneFogChanged', // 场景雾效改变事件
    'sceneGraphChanged', // 场景内容改变事件

    'cameraChanged', // 相机改变事件

    'geometryChanged', // 几何体改变事件

    'objectSelected', // 物体选中改变
    'objectFocused', // 物体交点改变事件

    'objectAdded', // 添加物体事件
    'objectChanged', // 物体改变事件
    'objectRemoved', // 物体移除事件

    'helperAdded', // 添加帮助事件
    'helperRemoved', // 移除帮助事件

    'materialChanged',

    'scriptAdded',
    'scriptChanged',
    'scriptRemoved',

    'windowResize',

    'showGridChanged',
    'refreshSidebarObject3D',
    'historyChanged',
    'refreshScriptEditor'
];

export default EventList;