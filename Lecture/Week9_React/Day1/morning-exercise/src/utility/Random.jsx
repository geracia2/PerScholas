export default function Random(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}