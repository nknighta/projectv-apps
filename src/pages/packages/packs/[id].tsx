import {Router} from "next/router"
import {useRouter} from "next/router"

export default function Pack() {
	const router = useRouter();
	return (
		<>{router.query.value}</>
	)
}
