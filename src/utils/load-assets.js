export const getTabImg = (image) => {
	// 参数一：该图片的相对路径
	// 参数二：写死。获取到图片的绝对路径
	// 根据参数二拿到image的相对路径
	return new URL(`../assets/img/${image}`, import.meta.url).href
}