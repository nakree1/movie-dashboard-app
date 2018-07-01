export default function setSafe(fn, defaultData = null) {
    try {
        return fn();
    } catch (e) {
        return defaultData;
    }
}