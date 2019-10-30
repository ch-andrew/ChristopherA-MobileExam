import React, {useEffect, useState}from 'react'
import { Text } from 'react-native'
import { View, Container, Content, Card, CardItem, H1, Button, Body } from 'native-base'
import { useSelector, useDispatch } from 'react-redux'
import firebase from 'firebase'

const TodoDetailScreen = props => {

    const [todo, setTodo] = useState({id : '', status : '', dateCreated : '', dateCompleted : '', todo : '' })
    const todoData = useSelector(state => state.todo.todoData);
    const dispatch = useDispatch()

    useEffect(() => {
        const {id} = props.navigation.state.params
        todoData.map(item => {if (item.id === id) setTodo(item) })
    }, [])

    const deleteTodo = () => {
        firebase.database().ref(`/${todo.id}`).remove()

        firebase.database().ref('/').on('value', snapshot => {
            if (snapshot.val())
                dispatch({
                    type: 'FILL_TODO',
                    payload: Object.values(snapshot.val())
                })
        })
        props.navigation.goBack()
    }

    return (
        <Container>
            {/* <Content> */}
                <Card style={{ marginTop: '50%' }}>
                    <CardItem header>
                        <Body>
                            <H1>
                                Todo: {todo.todo}
                            </H1>
                            <Text>
                                ID: {todo.id}
                            </Text>
                        </Body>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Status: {todo.status}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Created: {todo.dateCreated}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Text>
                            Date Completed: {todo.dateCompleted}
                        </Text>
                    </CardItem>
                    <CardItem>
                        <Button info>
                            <Text style={{color : "white"}} onPress={() => props.navigation.goBack()}>Go Back</Text>
                        </Button>
                        <Button danger>
                            <Text style={{color : "white"}} onPress={() => deleteTodo()}>Delete</Text>
                        </Button>
                    </CardItem>
                </Card>
            {/* </Content> */}
        </Container>
    )
}

export default TodoDetailScreen