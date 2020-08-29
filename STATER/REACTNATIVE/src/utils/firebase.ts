export const convertToFirebaseDatabasePathName = (text: string) => {
    return text.replace(/\./g, "!").replace(/#/g, "@")
        .replace(/\$/g, "%").replace(/\[/g, "&")
        .replace(/\]/g, "*")
}
export const revertFirebaseDatabasePathName = (text: string) => {
    return text.replace(/\!/g, ".").replace(/\@/g, "#")
        .replace(/\%/g, "$").replace(/\&/g, "[")
        .replace(/\*/g, "]")
}
