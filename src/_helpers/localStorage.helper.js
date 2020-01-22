class LocalStorageHelper {

    static save(data){
        localStorage.setItem("token",data);
    }   

    static validate(){
        return localStorage.getItem("token");
    }

    static logout(){
        localStorage.removeItem("token");
        window.location.href = '/login';
    }
}

export default LocalStorageHelper;