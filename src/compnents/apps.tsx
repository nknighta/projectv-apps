import {Flex, Button} from '@chakra-ui/react'
import React from 'react'

const apps = ["a", "b", "c", "d"];
const packs = ["pack1", "pack2", "pack3"];

export default function Apps({props}: any) {
	let link = "/";
	const applist = apps.map(apps => <Button style={{
		marginLeft: "1em",
		marginRight: "1em",
		marginTop: "2em",
		marginBottom: 20
	}}>
		{apps}
	</Button>);
	const packlist = packs.map(packs => <a href={link}>{packs}</a>);
	return (
		<>
			<ul>
				<ul>
					<Flex>
						{applist}
					</Flex>
					<Flex>
						{packlist}
					</Flex>
				</ul>
			</ul>
		</>
	)
}
