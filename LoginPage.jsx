import { useContext } from 'react';
import { UserContext } from './context/UserContext';

export const LoginPage = () => {
    //si yo necesito hacer uso de la informacion proporsionada por el provider, hariamos:
    const { user, setUser } = useContext(UserContext); //le pasamos como parametro el contexto del que queremos obtener la info
    return (
        <>
            <h1>LoginPage</h1>
            <hr />

            <pre>{JSON.stringify(user, null, 3)}</pre>

            <button
                className="btn btn-primary"
                onClick={() =>
                    setUser({
                        id: 123,
                        name: 'Kuro',
                        email: 'manolish98@gmail.com',
                    })
                }
            >
                Set User
            </button>
        </>
    );
};
