// import { createContext, useContext, useEffect, useState } from "react";

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState(localStorage.getItem('token'));
//     const [user, setUser] = useState(null);
//     const [isLoading, setIsLoading] = useState(true);

//     const storeTokenInLS = (serverToken) => {
//         setToken(serverToken);
//         localStorage.setItem("token", serverToken);
//     };

//     const LogoutUser = () => {
//         setToken("");
//         localStorage.removeItem("token");
//     };

//     const isLoggedIn = !!token;

//     const userAuthentication = async () => {
//         if (!token) return;

//         setIsLoading(true);
//         try {
//             const AuthorizationToken = `Bearer ${token}`;
//             const response = await fetch('http://localhost:3000/api/admin/adminuser', {
//                 method: 'GET',
//                 headers: { Authorization: AuthorizationToken },
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setUser(data.userData);
//             } else {
//                 console.error(`Error fetching user data: ${response.status} - ${response.statusText}`);
//                 LogoutUser();
//             }
//         } catch (error) {
//             console.error("Error during user authentication:", error);
//             LogoutUser();
//         } finally {
//             setIsLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (token) {
//             userAuthentication();
//         }
//     }, [token]);

//     return (
//         <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, isLoading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export const useAuth = () => {
//     const authContextValue = useContext(AuthContext);
//     if (!authContextValue) {
//         throw new Error("useAuth must be used within an AuthProvider");
//     }
//     return authContextValue;
// };





import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [user, setUser] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    // const [services, setservices] = useState("");


    const AuthorizationToken = `Bearer ${token}`;


    const storeTokenInLS = (serverToken) => {
        setToken(serverToken);
        return localStorage.setItem("token", serverToken);
    };

    const isLoggedIn = !!token;


    console.log('isLoggedIn', isLoggedIn);


    //tackling the logout functionality
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    }

    //jwt authentication to get current user data


    const userAuthentication = async () => {
          
        if (!token) return;

        setIsLoading(true);

        try {
            // setIsLoading(true);
            const response = await fetch('http://localhost:3000/api/auth/user', {
                method: 'GET',
                headers: {
                    Authorization: AuthorizationToken,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("user data ", data.userData);
                setUser(data.userData);
                // setIsLoading(false);
            }else{
                logoutUser();
                console.error("Error fetching user data");
                // setIsLoading(false);
            }

        } catch (error) {
            console.error("")
            logoutUser();
        }
        finally {
            setIsLoading(false);
        }
    }




    useEffect(() => {
        if (token) {
            userAuthentication();
        }
    }, [token]);


    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, AuthorizationToken, isLoading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return authContextValue;
};
