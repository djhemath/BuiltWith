export class Utils {
    static processIncomingJSONAttribute(attribute: string): (null | any) {
        if(!attribute) {
            return null;
        }

        try {
            return JSON.parse(attribute);
        } catch (err) {
            return false;
        }
    }
}