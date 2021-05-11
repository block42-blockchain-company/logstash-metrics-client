import Axios from "axios"

export default class LogstashMetrics {

    private static ls_url: string;
    private static production: boolean;

    public static install(Vue: any, options: any = {
        ls_url: "",
        production: true
    }) {
        if (options["ls_url"] === undefined || options["ls_url"] == ""){
            console.log("Logstash URL (ls_url) is not specified in options");
        } else {
            this.ls_url = options["ls_url"];
            this.production = options["production"];
        }
    }

    public static metric(type: string, data: object) {
        if(this.ls_url !== undefined && this.production){
            Axios.post(this.ls_url, this.buildMetric(type, data)).then(r => {
                if (r.status != 200){
                    console.log("!!! Could not send metrics to logstash !!!");
                }
            });
        } else {
            console.log("logstash metric: ")
            console.log(this.buildMetric(type, data));
        }
    }

    private static buildMetric(type: string, data: object){
        return {type: type, data: data}
    }

}
