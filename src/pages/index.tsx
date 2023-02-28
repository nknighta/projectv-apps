import React from 'react'
import {Box, Flex, Text, Button} from '@chakra-ui/react'
import {UserStatus} from '../status/status'
import Apps from '../compnents/apps'
import StickyFooter from '../compnents/footer'

export default function Index() {
	const Title = ({children}) => {
		return <Text fontSize={26}>{children}</Text>
	}
	const height = "15em"
	return (
		<>
			<a href='/'
				style={{
					textDecoration: 'none',
					fontSize: '40px'
				}}>
				VARIUS inc.</a>
			<Flex
				alignItems="center"
				justifyContent="center"
				h="40em"
				bgColor="#000021"
				color="#ff2200"
			>
				<Box style={{
					fontSize: 30
				}}>
					Welcome to VARIUS!!
				</Box>
			</Flex>
			<div>
			</div>
			<div>
				<div>
					<Title>Apps</Title>
					<Box h={height} bgColor={"#ff3300"}>
						<Flex>
							<Box bgColor="#ff2200"
								h={height}
								w={"50%"}
								alignItems="center"
								display={"flex"}
								paddingLeft={10}>
								<Text fontSize={20}>V metaverse</Text>
							</Box>
							<Box
								bgColor="green"
								w={"50%"}>
								aa
							</Box>
						</Flex>
					</Box>
					<Flex>
						<Apps />
					</Flex>
				</div>
				<div>
					<Title>Docs</Title>
					<div>
						<h1>ProjectV</h1>
						<a href="/">aa</a>
					</div>
				</div>
				<StickyFooter />
			</div >
		</>
	)
}
