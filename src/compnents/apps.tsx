import {Flex, Button} from '@chakra-ui/react'
import React from 'react'

const apps = ["Apaas", 111, "andaddadadadad", "dasdada", "wwwww"];
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
	const packlist = packs.map(packs => <li style={{
		margin: "2vh 2vh 2vh 5vh"
	}}>
		<a href={link}>{packs}</a>
	</li>);
	return (
		<>
			<ul>
				<ul>
					<Flex>
						{applist}
					</Flex>
					<Flex>
						<ul>
							{packlist}
						</ul>
					</Flex>
				</ul>
			</ul>
		</>
	)
}
