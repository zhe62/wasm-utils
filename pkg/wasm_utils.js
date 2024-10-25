import * as wasm from "./wasm_utils_bg.wasm";
export * from "./wasm_utils_bg.js";
import { __wbg_set_wasm } from "./wasm_utils_bg.js";
__wbg_set_wasm(wasm);