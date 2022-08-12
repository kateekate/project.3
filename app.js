const previewScreen = document.getElementById('preview-screen')
const contentScreren = document.getElementById('content-screen')
const audio = document.getElementById('soundtrack')

const onPreviewScreenClick = () => {
  audio.play()
  contentScreren.classList.remove('hidden')
  previewScreen.classList.add('hidden')
}

previewScreen.addEventListener('click', onPreviewScreenClick)