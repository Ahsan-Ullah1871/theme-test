import React from 'react';
import { Box, Text, Alert, Close, Message } from "theme-ui";

const Theme = () => {
    return (
		<div>
			<Box p={4} color="white" bg="secondary">
				<Text variant="caps">Hello World</Text>
			</Box>
			<Alert variant="secondary" mb={2}>
				Secondary <Close ml="auto" mr={-2} />
			</Alert>
			<Alert variant="accent" mb={2}>
				Accent
			</Alert>
			<Alert variant="highlight">Highlight</Alert>
			<Message m={5}>
				This is just a message for someone to read
			</Message>
		</div>
    );
};

export default Theme;