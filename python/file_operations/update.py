def update_server_config(file_path, key, value):
    try:
        # Open the server configuration file in read mode to read its contents
        with open(file_path, 'r') as file:
            lines = file.readlines()  # Read all lines into a list

        # Initialize a flag to check if the key was found
        key_found = False

        # Open the server configuration file in write mode to update its contents
        with open(file_path, 'w') as file:
            for line in lines:
                # Check if the line starts with the specified key
                if line.startswith(key + "="):
                    # If the key is found, update the line with the new value
                    file.write(f"{key}={value}\n")
                    key_found = True
                else:
                    # If the key is not found, write the line as it is
                    file.write(line)
            
            # If the key was not found in the file, append it at the end
            if not key_found:
                file.write(f"\n{key}={value}")
    
    except IOError as e:
        print(f"An error occurred while accessing the file: {e}")

# Define the path to the server configuration file
server_config_file = 'server.conf'

# Define the key to update and the new value to set in the configuration file
key_to_update = 'MAX_CONNECTIONS'
new_value = '5000'  # New maximum connections allowed

# Call the function to update the server configuration file with the new value
update_server_config(server_config_file, key_to_update, new_value)
