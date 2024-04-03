'use client';

import Image from "next/image"

/**
 * WordPress dependencies
 */
import { useEffect, useRef, useState } from "react";
import { useLocalStorage } from "usehooks-ts";

import EditorJS, { OutputData } from "@editorjs/editorjs";
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import Delimiter from '@editorjs/delimiter';
import NestedList from '@editorjs/nested-list';
import Checklist from '@editorjs/checklist';
import Table from '@editorjs/table';
import CodeTool from '@editorjs/code';
import InlineCode from '@editorjs/inline-code';


export default function AdminPage() {
    const node = useRef<HTMLDivElement>();
    const [editorData, updateEditorData] = useLocalStorage('content', '')

    // This will run only once
    useEffect(() => {
        if( node.current === null ){
            return;
        }

        const editor = new EditorJS({
            holder: "toto",
            placeholder: "Write your story…",
            // logLevel: "ERROR",
            data: editorData,
            onReady: () => {
                console.log('Ready')
                // ejInstance.current = editor;
            },
            onChange: async () => {
                let content = await editor.saver.save();
                // Put your logic here to save this data to your DB
                updateEditorData(content)
            },
            autofocus: true,
            tools: {
                paragraph: Paragraph,
                header: Header,
                delimiter: Delimiter,
                list: {
                    class: NestedList,
                    inlineToolbar: true,
                    config: {
                        defaultStyle: 'unordered'
                    },
                },
                checklist: {
                    class: Checklist,
                    inlineToolbar: true,
                },
                table: Table,
                code: CodeTool,
                inlineCode: InlineCode,
            },
        });

        return () => {
            // editor.destroy();
            // ejInstance.current = null;
        }
    }, []);

    console.log({editorData})

    return (
        <>
            <div id="toto" />
            {/*<div className="flex items-center">*/}
            {/*    <h1 className="text-lg font-semibold md:text-2xl">Inventory</h1>*/}
            {/*</div>*/}
            {/*<div className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">*/}
            {/*    <div className="flex flex-col items-center gap-1 text-center">*/}
            {/*        <h3 className="text-2xl font-bold tracking-tight">*/}
            {/*            You have no products*/}
            {/*        </h3>*/}
            {/*        <p className="text-sm text-muted-foreground">*/}
            {/*            You can start selling as soon as you add a product.*/}
            {/*        </p>*/}
            {/*        <Button className="mt-4">Add Document</Button>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </>
    )
}
