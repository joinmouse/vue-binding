<!-- template有且仅有一个儿子标签
例如：<template> <div></div> </template>  正确
<template> <div></div>  <div></div> </template> 会报错
-->
<template>
  <div class="page">
    <header>
      <Topbar/>
    </header>
    <main>
      <ResumeEditor/>
      <ResumePreview/>
    </main>
  </div>
</template>

<!--data应该是一个函数，data=>view -->
<script>
import './asset/reset.css'
import 'normalize.css/normalize.css'

import Topbar from './component/Topbar'
import ResumeEditor from './component/ResumeEditor'
import ResumePreview from './component/ResumePreview'

export default {
  name: 'app',
  data: function () {
    return {
      text: 'hello'
    }
  },
  components: {Topbar,ResumeEditor,ResumePreview}
}
</script>

<style>
  .page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    background: #EAEBEC;
  }
  .page main {
    flex-grow: 1;
    align-self: center;
    min-width: 1024px;
    max-width: 1440px;
    width: 100%;
    margin:16px 0;
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
  }

  #resumeEditor {
    width: 35%;
    background: #444;
  }
  #resumePreview {
    flex-grow: 1;
    margin-left: 16px;
    background: #777;
  }

</style>
