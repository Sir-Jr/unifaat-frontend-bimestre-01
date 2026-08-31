import bcrypt from 'bcrypt'

const users = [
    { name: 'Alice Souza', email: 'alice.souza@example.com', password: 'senha123' },
    { name: 'Bruno Lima', email: 'bruno.lima@example.com', password: 'senha123' },
    { name: 'Carla Mendes', email: 'carla.mendes@example.com', password: 'senha123' },
    { name: 'Daniel Alves', email: 'daniel.alves@example.com', password: 'senha123' },
    { name: 'Elisa Rocha', email: 'elisa.rocha@example.com', password: 'senha123' }
]

export default async function seed(postgres) {
    for (const user of users) {
        const hashedPassword = await bcrypt.hash(user.password, 10)

        await postgres.query(
            `INSERT INTO users (name, email, password, created_at, updated_at)
             VALUES ($1, $2, $3, NOW(), NOW())
             ON CONFLICT (email) DO NOTHING`,
            [user.name, user.email, hashedPassword]
        )
    }
}
