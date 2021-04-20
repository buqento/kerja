import React, { useState } from 'react'
import { Container, Form, Button } from 'react-bootstrap'
import fire from '../config/firebase'
import { useRouter } from 'next/router'

const Addnew = () => {
    const router = useRouter()
    const [nik, setNik] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (e) => {
        if (nik !== "" && username !== "" && password !== "") {
            e.preventDefault();
            let found = false
            const docRef = fire
                .firestore().collection('users')
                .where('nik', '==', nik)
            docRef.onSnapshot(snap => {
                const data = snap.docs.map(doc => ({
                    id: doc.id, ...doc.data()
                }))
                data.length > 0 && (found = true)
            })
            docRef.get()
                .then(() => {
                    if (!found) {
                        fire.firestore().collection("users")
                            .add({
                                date_modified: Date.now(),
                                nik: nik,
                                username: username,
                                password: password
                            })
                            .then(() => { alert('Pendaftaran berhasil') })
                            .catch((error) => { alert(error.message) })
                        setUsername("")
                        router.push("/")
                    } else {
                        alert('NIK telah terdaftar!')
                    }
                })
                .catch(err => console.log(err))
        } else {
            alert('Data tidak sesuai!')
        }
    }
    return (
        <Container>
            <h1 className="my-4">Pendaftaran Akun</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>NIK</Form.Label>
                    <Form.Control
                        size="lg"
                        id="nik"
                        type="text"
                        placeholder="Nomor Induk Kependudukan"
                        value={nik}
                        onChange={(e) => setNik(e.target.value)}
                    />
                </Form.Group>
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
                <Button size="lg" type="submit" block>Daftar Akun</Button>
                <Button size="lg" variant="link" href="login" block>Login</Button>
            </Form>
        </Container>


    )
}
export default Addnew





