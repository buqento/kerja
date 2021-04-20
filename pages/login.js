import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import fire from '../config/firebase'
import { useRouter } from 'next/router'

const Login = () => {
    const router = useRouter()
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        let found = false
        const docRef = fire
            .firestore().collection('users')
            .where('username', '==', username)
            .where('password', '==', password)
        docRef.onSnapshot(snap => {
            const data = snap.docs.map(doc => ({
                id: doc.id, ...doc.data()
            }))
            data.length > 0 && (found = true)
        })
        docRef.get()
            .then(() => {
                if (found) {
                    router.push("/")
                    localStorage.setItem('username', JSON.stringify(username))
                } else {
                    alert('Username atau Password yang dimasukan tidak sesuai!')
                }
            })
            .catch(err => console.log(err))
    }

    return (
        <Container>
            <h1 className="my-4">Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        size="lg"
                        id="username"
                        type="text"
                        placeholder="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        size="lg"
                        id="password"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
                <Button size="lg" type="submit" block>Login</Button>
                <Button size="lg" variant="link" href="addnew" block>Belum Punya Akun?</Button>
            </Form>
        </Container>
    )
}
export default Login