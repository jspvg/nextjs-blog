//folder name by convention (could also be utils)

import fs from 'fs'; //module to read files from the file system
import path from 'path'; //module to manipulate file paths
import matter from 'gray-matter'; //library that let's you parse metadata in each md file

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
    //get file names
    const fileNames = fs.readdirSync(postsDirectory);
    const allPostsData = fileNames.map((fileName) => {
        //get id by removing .md from file name
        const id = fileName.replace(/\.md$/, '');

        //read file as string
        const fullPath = path.join(postsDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        //using gray-matter to parse the post metadata section
        const matterResult = matter(fileContents);

        //combine data with id
        return {
            id,
            ...matterResult.data,
        };
    });

    //sorting posts by date
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}