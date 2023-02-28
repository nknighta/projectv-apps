import React, {useState, useEffect} from 'react';
import {Text, Input} from '@chakra-ui/react';
import {useRouter} from 'next/router';
import Link from 'next/link';
import {PackStatus} from './status';

export default function Index({chindren}: any) {
	const router = useRouter();
	const [value, setValue] = React.useState('')
	const searchhandle = (input) => {
		setValue(input.target.value)
	}
	const handleClick = (event) => {
		//router.push(`/packages/packs/${event.target.value}.tsx` as 'packages/packs/[id].tsx')
	}
	return (
		<>
			<Text mb='8px'>Value: {value}</Text>
			<label>Search</label>
			<Input
				value={value}
				onChange={searchhandle}
				placeholder='search'
				w={450}
			/>
			<a href="packages/packs/[id].tsx">aaa</a>

			<PackStatus packid={value} />
		</>
	)
}
