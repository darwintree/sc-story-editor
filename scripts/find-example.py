import json
import os
import functools


def analyze_json_files(directory_path, excluded_properties=[]):
    properties = {}
    counter = 20
    for root, dirs, files in os.walk(directory_path):
        for filename in files:
            if not filename.endswith('.json'):
                continue
            with open(os.path.join(root, filename), encoding='utf-8') as f:
                data = json.load(f)
                for obj in data:
                    for prop, value in obj.items():
                        # dest = {"charAnim1": "smile1",}
                        if (prop == "charAnim1" and value == "smile1") and obj.get("speaker") == "灯織":
                            print(os.path.join(root, filename))
                            counter -= 1
                            if counter == 0:
                                return 
                            # return
                        # if prop in excluded_properties:
                        #     continue
                        # update_property(properties, prop, value)
    # for prop in properties:
    #     properties[prop]['frequency'] = dict(
    #         sorted(properties[prop]['frequency'].items(), key=lambda x: x[1], reverse=True))
    # properties = dict(
    #     sorted(properties.items(), key=lambda x: x[0], reverse=True))

    # return properties


# def update_property(properties, prop, value):
#     if prop not in properties:
#         properties[prop] = {'list': [], 'frequency': {}}
#     if value not in properties[prop]['list']:
#         properties[prop]['list'].append(value)
#     if isinstance(value, dict):
#         value = str(
#             dict(sorted(value.items(), key=lambda x: x[0], reverse=True)))
#     properties[prop]['frequency'][value] = properties[prop]['frequency'].get(
#         value, 0) + 1


def main():
    properties = analyze_json_files('F:\\Projects\\newsc\\shiny-image-info\\assets\\json',
                                    excluded_properties=['id', 'voice', 'charId', 'text', 'movie'])

    # output_path = './output.json'
    # with open(output_path, 'w', encoding='utf-8') as f:
    #     json.dump(properties, f, ensure_ascii=False, indent=2)
    # str_to_write = [
    #     "const True = true\n",
    #     "const False = false\n",
    #     "const None = null\n",
    #     "\n",
    #     "const vals = {\n"
    # ]
    # # written_vals = []
    # for prop in properties:
    #     if prop in ['id', 'voice', 'charId', 'text', 'waitTime', 'stillId', 'still', 'speaker', 'select', 'se', 'nextLabel', 'movie', 'label', 'effectLabel', 'charPosition', 'charEffect', 'bgm', 'bg']:
    #         continue
    #     str_to_write.append(
    #         f"  {prop}: {properties[prop]['list']} as const,\n")
    # str_to_write.append("}\n\n")
    # str_to_write.append("export default vals \n")
    # output_path = './src/interfaces/vals.ts'
    # with open(output_path, 'w', encoding='utf-8') as f:
    #     f.writelines(str_to_write)


if __name__ == "__main__":
    main()
