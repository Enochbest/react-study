/**
 * useLayoutEffect同步执行状态更新
 *
 * useEffect()是在渲染被绘制到屏幕之后更新的,是异步的;useLayOutEffect()是在渲染之后,但是在页面更新之前执行,是同步的
 *
 * 大部分情况下使用useEffect(),性能更好,但是当你需要在useEffect里处理dom的时候,并且会改变页面样式,就需要用useLayOutEffect(),否则可能会出现闪屏问题
 */
