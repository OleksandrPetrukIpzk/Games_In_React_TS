interface SelectedStyle{
    background: string,
    color: string

}
export const changeBackgroundColor = (selectedStyle:SelectedStyle) =>{
    document.body.style.background = selectedStyle.background;
    document.body.style.color = selectedStyle.color;
}