import AmirButton from './amir-button'
import AmirLoading from './amir-loading'
import AmirToast from './amir-toast'
import AmirConfirm from './amir-confirm'
import AmirTable from './amir-table'
import AmirInput from './amir-input'
import AmirSelect from './amir-select'
import AmirTextarea from './amir-textarea'
import AmirDialog from './amir-dialog'
import AmirUpload from './amir-upload'

let amir = {
	"a-button": AmirButton,
	"a-loading": AmirLoading,
	"a-toast": AmirToast,
	'a-confirm': AmirConfirm,
	'a-table': AmirTable,
	'a-input': AmirInput,
	'a-select': AmirSelect,
	'a-textarea': AmirTextarea,
	'a-dialog': AmirDialog,
	'a-upload': AmirUpload
};

function install(Vue) {
	Object.keys(amir).forEach((key)=>{
		Vue.component(key, amir[key]);
	});
}

if(typeof window !== 'undefined' && window.Vue) {
	window.Vue.use(install);
}

export default install