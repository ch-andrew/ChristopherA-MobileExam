import React from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body } from 'native-base'

const TodoDetailScreen = props => {
    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo: 
                            </H1>
                            <Text>
                                ID: 
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed: 
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info>
                            <Text>Go Back</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen