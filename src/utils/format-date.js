import dayjs from "dayjs"; 

export function formatMonth(date){
	return dayjs(date).format('MM月DD日')
}

export function diffDayCount(start,end){ 
	return dayjs(end).diff(start,"day")
}