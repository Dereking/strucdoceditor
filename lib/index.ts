

import StructDocEditor from './StructDocEditor';


// 非常简单的加法函数
export function add(a: number, b: number): number {
    return a + b;
}

export function CreateEditor(divId: string): StructDocEditor {
    return new StructDocEditor(divId, null);
}