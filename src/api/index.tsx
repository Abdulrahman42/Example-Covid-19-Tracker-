import axios, { AxiosResponse } from 'axios';
import { Data } from '../DataType.type';

const url = 'https://covid-api.com/api/reports/total?date=2020-03-14'

type FetchProps = {
	country: string
}

interface ApiResponse {
	status: string
	data: Data
	error?: string
}
export const fetchData = async(): Promise<Data> => {
	let changeableUrl = url;
	// if (country) {
	// 	changeableUrl = `${url}}`
	// }
	try {
		const { data }: AxiosResponse<ApiResponse> = await axios.get(changeableUrl);
		return data.data
	}
	catch (error) {
		return {
			active: 0,
			confirmed: 0,
			recovered: 0,
			deaths: 0,
			last_update: ""
    };
	}
}

// type DailyProps = {
// 	reportDate: string;
// 	confirmed: {
// 		total: number
// 	};
// 	deaths: {
// 		total: number
// 	};
// }

// export const fetchDailyData = async () => {
// 	try {
// 		const { data } = await axios.get(`${url}/daily`)

// 		const modifiedData = data.map((dailyData: DailyProps) => ({
// 			confirmed: dailyData.confirmed.total, 
// 			deaths: dailyData.deaths.total,
// 			date: dailyData.reportDate
// 		}));
// 		return modifiedData;
// 	} catch (error) {
// 		console.log(error)
// 	}
// }


export const fetchCountries = async () => {
	try {
		const urlCountry = 'https://covid-api.com/api/regions?per_page=300'
		const { data } = await axios.get(urlCountry)
		return data.data
	} catch (error) {
		console.log(error)
	}
}