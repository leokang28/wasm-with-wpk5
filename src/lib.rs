use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn run() {
    bare_bones();
    using_a_macro();
    using_web_sys();
}

#[wasm_bindgen]
pub fn rust_add_10(a: u32) -> u32 {
    a + 10
}

#[wasm_bindgen]
extern "C" {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_u32(a: u32);
    #[wasm_bindgen(js_namespace = console, js_name = log)]
    fn log_many(a: &str, b: &str);
}

fn bare_bones() {
    log("hello from rust");
    log_u32(32);
    log_many("str1", "str2");
}

macro_rules! console_log {
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

fn using_a_macro() {
    console_log!("hello {}", "from rust using macro");
    console_log!("print some numbers");
    console_log!("1 + 3 = {}", 1 + 3);
}

fn using_web_sys() {
    use web_sys::console;

    console::log_1(&"hello using websys".into());

    let js:JsValue = 4.into();
    console::log_2(&"Logging arbitrary values looks like".into(), &js);
}