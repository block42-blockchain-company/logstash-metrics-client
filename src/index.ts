import Axios from "axios"

export default class LogstashMetrics {

    private static ls_url: string;

    public static install(Vue: any, options: any = {
        ls_url: ""
    }) {
        console.log("inint logstash metrics")
        if (options["ls_url"] === undefined || options["ls_url"] == ""){
            console.log("Logstash URL (ls_url) is not specified in options");
        } else {
            this.ls_url = options["ls_url"];
        }
    }

    public static metric(type: string, message: string) {
        if(this.ls_url !== undefined){
            Axios.post(this.ls_url, {type: type, message: message}).then(r => {
                console.log("send metrics to logstash")
            });
        }
    }

}
